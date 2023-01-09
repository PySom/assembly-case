import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchList from '../../components/search_list/search_list';

test('renders search items count', () => {
  render(<SearchList searchItems={[]} total={2} />);
  const linkElement = screen.getByText('Total Count: 2');
  expect(linkElement).toBeInTheDocument();
});