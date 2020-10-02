import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';

import TestApp from '../../helpers/TestApp';

describe('GenreList page', () => {
  test('has genre name at the top', async () => {
    const { getAllByText } = render(<TestApp />);

    const getByTextWithMarkup = text => getAllByText((_, node) => node.textContent === text);

    fireEvent.click(getByTextWithMarkup('Shounen')[0]);

    const result = await screen.findByText('Shounen animes');

    expect(result).toBeTruthy();
  });
});
