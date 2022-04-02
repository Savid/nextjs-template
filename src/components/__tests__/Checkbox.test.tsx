import React from 'react';

import Checkbox from '@stories/components/Checkbox/Checkbox.stories';
import { cleanup, fireEvent, render, screen } from '@testing-library/react';

// unmount and cleanup DOM after the test is finished.
afterEach(cleanup);

it('Checkbox changes the text after click', () => {
  if (Checkbox.component) render(<Checkbox.component {...Checkbox.args} />);

  const checkbox = screen.getByLabelText('gleeb') as HTMLInputElement;
  expect(checkbox).toBeInTheDocument();
  fireEvent.click(checkbox);
  expect(checkbox.checked).toBeTruthy();
});
