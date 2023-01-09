import { render, screen } from '@testing-library/react';
import React from 'react';
import SearchList from '../../components/search_list/search_list';

test('renders search list items', () => {
    const testItem = [{
        name: 'Chisom-test',
        watchers_count: 2,
        html_url: 'https://github.com/chisom',
        owner: {
            login: 'chisom'
        }
    }];
  render(<SearchList searchItems={testItem} total={1} />);
  const headerTitle = screen.getByText(testItem[0].name);
  const watcherDesc = screen.getByText(`This repository has ${testItem[0].watchers_count} watchers.`)
  expect(headerTitle).toBeInTheDocument();
  expect(watcherDesc).toBeInTheDocument();
});