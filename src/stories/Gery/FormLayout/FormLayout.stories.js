import { FormLayout } from './formLayout.tsx';
import React from "react";



// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Gery/FormLayout',
  component: FormLayout,
  tags: ['autodocs'],
  argTypes: {
    formData: { control: 'object' },
    classes: { control: 'text' },
    isTest: { control: 'boolean' },
    borderColor: { control: 'color' },
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
    classes: 'flex-row flex-wrap gap-1 pa-2',
    borderColor: 'lightgrey',
    width: '41%',
    isTest: true,
  }
};
