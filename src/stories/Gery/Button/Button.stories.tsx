// @ts-ignore
import React from "react";
import {action} from "@storybook/addon-actions";
import {ButtonProps} from "./interface.js";
import Button from "./button";

export default {
  title: 'Gery/Button',
  component: Button,
  tags: ['autodocs'],
  argTypes: {
    children: {control: 'text', description: 'Button text'},
    onClick: {description: 'Optional click handler'},
    width: {control: 'text', description: 'Optional direct width of button'},
    className: {
      control: 'select',
      options: ['btn-primary'],
      description: 'Optional button style className'
    },
    inverse: {control: 'boolean', description: 'Optional inverse button'},
  },
};

const Template = (args: ButtonProps) => <div style={{padding: '10px'}}>
  <Button {...args}>{args.children}</Button>
</div>;

export const Default = {
  args: {
    children: 'Button',
    className: 'btn-primary',
    width: '10%',
    inverse: true,
    onClick: action('onClick'),
  },
  render: (args) => Template(args),
};