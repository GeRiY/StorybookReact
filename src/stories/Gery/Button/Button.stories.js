import Button from './button.tsx';
import React from "react";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Gery/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    text: { control: 'text' },
    onClick: { action: 'clicked' },
    width: { control: 'text' },
    className: { control: 'text' },
    inverse: { control: 'boolean' },
    children: { control: 'text' },
  },
};

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DEFAULT = {
  args: {
    text: 'Button',
    inverse: true
  }
};
