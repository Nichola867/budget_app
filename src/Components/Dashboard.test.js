import React from 'react';
import { render } from '@testing-library/react';
import { Dashboard } from './Dashboard';
import { Expense } from '../Models/Expense';

test('renders title', () => {
  const { getByText } = render(<Dashboard
    income={2}
    expenses={[]}
  />);
  const textElement = getByText(/Dashboard/i);
  expect(textElement).toBeInTheDocument();
});

describe('Category list', () => {

  test('returns an empty list if there are no expenses', () => {
    const dashboard = new Dashboard()
    dashboard.props = {expenses: []}
    const categories = dashboard.getCategories()
    expect(categories).toEqual([])
  })

  test('returns a compiled list of categories', () => {
    const dashboard = new Dashboard()
    dashboard.props = {expenses: [
      new Expense({desc: 'test1', category: 'cat1', estAmount: 10, actAmount: 1}),
      new Expense({desc: 'test2', category: 'cat2', estAmount: 5, actAmount: 2}),
      new Expense({desc: 'test3', category: 'cat1', estAmount: 20, actAmount: 10}),
      new Expense({desc: 'test4', category: 'cat3', estAmount: 15, actAmount: 6})
    ]}

    const expectedCategories = [
      {category: 'cat1', estAmount: 30, actAmount: 11},
      {category: 'cat2', estAmount: 5, actAmount: 2},
      {category: 'cat3', estAmount: 15, actAmount: 6}
    ]

    const categories = dashboard.getCategories()
    expect(categories).toEqual(expectedCategories)
  })
})