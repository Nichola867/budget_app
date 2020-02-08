import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders budget app text', () => {
  const { getByText } = render(<App />);
  const textElement = getByText(/Budget App/i);
  expect(textElement).toBeInTheDocument();
});
