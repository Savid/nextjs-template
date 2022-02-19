import Component from '@components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Component,
  argTypes: {
    id: {
      table: { defaultValue: { summary: 'test-id' } },
      control: { type: 'text' },
    },
    label: {
      table: { defaultValue: { summary: 'gleeb' } },
      control: { type: 'text' },
    },
  },
};

export const Default = Component;

