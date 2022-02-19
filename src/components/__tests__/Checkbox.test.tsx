import React from 'react';

import { cleanup, fireEvent, render, screen } from '@testing-library/react';

import Checkbox from '../Checkbox';

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Checkbox changes the text after click', () => {
  render(<Checkbox id="test" label="Test" />);

  const checkbox = screen.getByLabelText('Test') as HTMLInputElement;

  expect(checkbox).toBeTruthy();

  fireEvent.click(checkbox);

  expect(checkbox.checked).toBeTruthy();
});
