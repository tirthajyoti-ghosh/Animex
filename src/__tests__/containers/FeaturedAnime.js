import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render, screen } from '@testing-library/react';

import TestApp from '../../helpers/TestApp';

describe('FeaturedAnime', () => {
  test('has header text', async () => {
    render(<TestApp />);

    const result = await screen.findAllByText((_, node) => node.textContent === 'overviewdetails');
    expect(result).toBeTruthy();
  });
});
