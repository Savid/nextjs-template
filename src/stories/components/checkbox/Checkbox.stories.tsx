import Component from '@components/Checkbox';

export default {
  title: 'Components/Checkbox',
  component: Component,
  argTypes: {
    id: {
      defaultValue: 'test',
      control: { type: 'text' },
    },
    label: {
      defaultValue: 'gleeb',
      control: { type: 'text' },
    },
  },
};

export const Default = Component;
