import React from 'react';
import { render } from '@testing-library/react';
import { Summary } from './Summary';
import { Expense } from '../Models/Expense';

test('renders title', () => {
  const { getByText } = render(<Summary
    income={2}
    expenses={[]}
  />);
  const textElement = getByText(/Summary/i);
  expect(textElement).toBeInTheDocument();
});

test('Income is displayed on screen', () => {
  const { getByText } = render(<Summary
    income={100000}
    expenses={[]}
  />);
  const textElement = getByText(/Income: £1000.00/i);
  expect(textElement).toBeInTheDocument();
});

test('Expenses are displayed on screen', () => {
  const expenses = [new Expense({ desc: 'test1' }), new Expense({ desc: 'test2' })]
  const { getByText } = render(<Summary
    income={2}
    expenses={expenses}
  />);
  const textElement = getByText(/Expenses:test1, test2/i);
  expect(textElement).toBeInTheDocument();
});