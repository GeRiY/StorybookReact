import { Page } from './page.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Gery/Form-view',
  component: Page,
  tags: ['autodocs'],
  argTypes: {
      formData: { control: 'object' },
      firstLayoutClasses: { control: 'text' },
      secondLayoutClasses: { control: 'text' }
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DEFAULT = {
  args: {
    formData: {
        name: 'Gergő',
        age: 10,
        gender: 'Férfi'
    },
    firstLayoutClasses: 'gap-1 pa-2',
    secondLayoutClasses: 'gap-1'
  },
};
