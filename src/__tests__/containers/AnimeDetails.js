import React from 'react';
import { Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';

import TestApp from '../../helpers/TestApp';

test('successfully lands on the AnimeDetails page', async () => {
  const history = createMemoryHistory();
  history.push('/anime/32281');
  render(
    <Router history={history}>
      <TestApp />
    </Router>,
  );
  const result = await screen.findByText(/Kimi no Na wa./);
  expect(result).toBeTruthy();
});
