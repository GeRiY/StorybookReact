// @ts-ignore
import React from "react";
import {action} from "@storybook/addon-actions";
import {ButtonProps} from "./interface.js";
import {Button} from "./button";
import Template from "../template";
export default {
  title: 'Jani/Button',
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

const Main = (args) => <Button {...args}>{args.children}</Button>;

const DefaultTemplate = (args) => <Template>
  <Main {...args}>{args.children}</Main>
</Template>;
export const Default = {
  args: {
    children: 'Button',
    className: 'btn-primary',
    width: '10%',
    inverse: true,
    onClick: action('onClick'),
  },
  render: (args: ButtonProps) => DefaultTemplate(args),
};