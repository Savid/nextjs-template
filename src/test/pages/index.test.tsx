import React from 'react';

import Home from '@pages/index';
import { cleanup, render, screen } from '@testing-library/react';

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('CheckBoxExample changes the text after click', () => {
  render(<Home />);
  expect(screen.queryByLabelText(/nothing/i)).toBeFalsy();
});
