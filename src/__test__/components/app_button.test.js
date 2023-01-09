import { render, screen } from '@testing-library/react';
import React from 'react';
import AppButton from '../../components/app_button/app_button';

test('App button renders correct text', () => {
  render(<AppButton text='Test Button' />);
  const linkElement = screen.getByText('Test Button');
  expect(linkElement).toBeInTheDocument();
});