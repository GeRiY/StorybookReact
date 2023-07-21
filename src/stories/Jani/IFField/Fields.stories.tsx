// @ts-ignore
import React from "react";
import { IFField } from './IFField';
import Template from "../template";
import {IFFieldProps, OnChangeProps} from "./interface";

export default {
  title: 'Jani/Fields',
  component: IFField,
  tags: ['autodocs'],
  argTypes: {
    name: { control: 'text' },
    value: { control: 'text' },
    label: { control: 'text' },
    width: { control: 'text' },
    onChange: { control: 'function' },
  },
};

const Main = (args) => <IFField {...args}>{args.children}</IFField>;

const DefaultTemplate = (args) => <Template>
  <Main {...args} />
</Template>;

export const Text_Input = {
  args: {
    name: 'name',
    value: 'Gergő',
    label: 'Név',
    width: '10%',
    onChange: (data: OnChangeProps) => {
      console.log(data)
    },
    render: (args: IFFieldProps) => DefaultTemplate(args),
  },
};
