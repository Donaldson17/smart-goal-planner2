import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders the app without crashing', () => {
  render(<App />);
  const linkElement = screen.getByText(/your goals/i);
  expect(linkElement).toBeInTheDocument();
});