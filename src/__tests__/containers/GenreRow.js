import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';

import TestApp from '../../helpers/TestApp';

describe('GenreRow', () => {
  test('has header text', async () => {
    render(<TestApp />);

    const result = await screen.findByText(/action animes/);
    expect(result).toBeTruthy();
  });
});
