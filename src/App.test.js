import { render, screen } from '@testing-library/react';
import App from './App';

test('renders app', () => {
  render(<App />);
  const basicElement = screen.getByText("hello");
  expect(basicElement).toBeInTheDocument();
});
