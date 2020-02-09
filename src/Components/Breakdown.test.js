import React from 'react';
import { render } from '@testing-library/react';
import { Breakdown } from './Breakdown';

test('renders title', () => {
  const { getByText } = render(<Breakdown
    categories={[]}
  />);
  const textElement = getByText(/Breakdown of expenses/i);
  expect(textElement).toBeInTheDocument();
});


test('Categories are displayed on screen with the percentage of the total that they were', () => {
  const categories = [
    { category: 'test1', estAmount: 10000, actAmount: 600 },
    { category: 'test2', estAmount: 30000, actAmount: 2000 },
    { category: 'test3', estAmount: 20000, actAmount: 1000 },
  ]

  const { getAllByTitle } = render(<Breakdown
    categories={categories}
  />);
  const expenseElements = getAllByTitle(/Expense breakdown/i);

  expect(expenseElements[0].innerHTML).toEqual('test1: £100.00 (16.7%)')
  expect(expenseElements[1].innerHTML).toEqual('test2: £300.00 (50.0%)')
  expect(expenseElements[2].innerHTML).toEqual('test3: £200.00 (33.3%)')
});
