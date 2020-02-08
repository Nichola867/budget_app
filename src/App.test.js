import React from 'react';
import { render } from '@testing-library/react';
import {App} from './App';

test('renders budget app text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Budget App/i);
  expect(textElement).toBeInTheDocument();
});

test('Income is displayed on screen', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Income: £1000.00/i);
  expect(textElement).toBeInTheDocument();
});

test('Expenses are displayed on screen', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Expenses:Petrol, Cat Food/i);
  expect(textElement).toBeInTheDocument();
});