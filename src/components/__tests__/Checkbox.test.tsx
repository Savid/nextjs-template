import React from 'react';

import Checkbox from '@stories/components/checkbox/Checkbox.stories';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Checkbox changes the text after click', () => {
  render(<Checkbox.component {...Checkbox.args} />);

  const checkbox = screen.getByLabelText('Test') as HTMLInputElement;
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBeTruthy();
});
