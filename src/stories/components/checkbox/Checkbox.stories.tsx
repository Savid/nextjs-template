import Component from '@components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Component,
  args: {
    id: 'test',
    label: 'Test',
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
  },
};

export const Default = Component;
