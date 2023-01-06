import { render, screen } from '@testing-library/react';
import App from '../../App';

test('renders Search the GitHub API', () => {
  render(<App />);
  const linkElement = screen.getByText('Search the GitHub API with user or organization name From Assembly');
  expect(linkElement).toBeInTheDocument();
});
