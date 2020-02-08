import React from 'react';
import { render } from '@testing-library/react';
import { Dashboard } from './Dashboard';

test('renders title', () => {
  const { getByText } = render(<Dashboard
    income={2}
    expenses={[]}
  />);
  const textElement = getByText(/Dashboard/i);
  expect(textElement).toBeInTheDocument();
});
