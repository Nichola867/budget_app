import React from 'react';
import { render } from '@testing-library/react';
import { MonthlyExpenses } from './MonthlyExpenses';

test('renders title', () => {
  const { getByText } = render(<MonthlyExpenses
    categories={[]}
  />);
  const textElement = getByText(/Monthly Expenses/i);
  expect(textElement).toBeInTheDocument();
});


test('Categories are displayed on screen in descending order of estimated amount', () => {
  const categories = [
    { category: 'test1', estAmount: 10000, actAmount: 600 },
    { category: 'test2', estAmount: 30000, actAmount: 2000 },
    { category: 'test3', estAmount: 20000, actAmount: 1000 },
  ]

  const { getAllByTitle } = render(<MonthlyExpenses
    categories={categories}
  />);
  const expenseElements = getAllByTitle(/Expense breakdown/i);

  expect(expenseElements[0].innerHTML).toEqual('test2: £20.00/£300.00')
  expect(expenseElements[1].innerHTML).toEqual('test3: £10.00/£200.00')
  expect(expenseElements[2].innerHTML).toEqual('test1: £6.00/£100.00')
});
