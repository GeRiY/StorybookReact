import { Form } from './form.jsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Gery/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    isTest: { control: 'boolean' },
    formData: { control: 'object' },
    onChange: { action: 'function' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DEFAULT = {
  args: {
    isTest: true,
    formData: {
      name: 'Gergő',
      age: 10,
      gender: 'Férfi'
    },
    onChange: (data) => console.log(data)
  },
};
