import Component from '@components/Checkbox';
import { expect } from '@storybook/jest';
import type { ComponentMeta, ComponentStoryObj } from '@storybook/react';
import { userEvent, waitFor, within } from '@storybook/testing-library';

const componentMeta: ComponentMeta<typeof Component> = {
  title: 'Components/Checkbox',
  component: Component,
  args: {
    id: 'test-id',
    label: 'gleeb',
  },
  argTypes: {
    id: {
      table: { defaultValue: { summary: 'test-id' } },
      control: { type: 'text' },
    },
    label: {
      table: { defaultValue: { summary: 'gleeb' } },
      control: { type: 'text' },
    },
    onChange: { action: true },
  },
  parameters: {
    actions: {
      handles: ['mouseover label', 'mouseover input', 'click label', 'click input'],
    },
  },
};

export default componentMeta;

export const Default: ComponentStoryObj<typeof Component> = {
  play: async ({ args, canvasElement }) => {
    const canvas = within(canvasElement);
    const label = canvas.getByLabelText(args.label ?? '');
    const input = canvas.getByTestId('input');
    await userEvent.click(label);
    await waitFor(async () => {
      await expect(args.onChange).toHaveBeenCalled();
      await expect(label).toHaveFocus();
      await expect(input).toBeChecked();
    });
    await userEvent.click(input);
    await waitFor(async () => {
      await expect(args.onChange).toHaveBeenCalled();
      await expect(input).toHaveFocus();
      await expect(input).not.toBeChecked();
    });
  },
};
