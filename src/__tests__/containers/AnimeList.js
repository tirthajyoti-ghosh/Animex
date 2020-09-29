import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import TestApp from '../../helpers/TestApp';

describe('AnimeList/index page', () => {
  test('has filter buttons', () => {
    const { getAllByText } = render(<TestApp />);

    const getByTextWithMarkup = text => getAllByText((_, node) => node.textContent === text);

    expect(getByTextWithMarkup('AllTVMovieSpecial')[0]).toBeInTheDocument();
  });
});
