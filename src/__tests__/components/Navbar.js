import '@testing-library/jest-dom/extend-expect';
import React from 'react';
import { render } from '@testing-library/react';

import TestApp from '../../helpers/TestApp';

describe('Navbar', () => {
  test('has genre and login buttons', () => {
    const { getAllByText } = render(<TestApp />);

    const getByTextWithMarkup = text => getAllByText((_, node) => node.textContent === text);

    expect(getByTextWithMarkup('HomeActionComedyRomanceShounenSupernaturalLog InRegister')[0]).toBeInTheDocument();
  });
});
