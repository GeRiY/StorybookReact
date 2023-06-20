// @ts-ignore
import React from "react";
import {FormLayout} from './formLayout';
import Template from "../template";
import {IFField} from "../IFField/IFField";
import {FormDataType, FormLayoutTypes} from "./interface";

export default {
  title: 'Gery/FormLayout',
  component: FormLayout,
  tags: ['autodocs'],
  argTypes: {
    formData: { control: 'object' },
    classes: { control: 'text' },
    borderColor: { control: 'color' },
  },
};

const Main = (args) => <FormLayout {...args}>{args.children}</FormLayout>;

const DefaultTemplate = (args) => <Template>
  <Main {...args}>
    <FormLayout classes={'gap-1'}>
      <IFField name={'name'} label={'Név'}/>
      <IFField name={'age'} label={'Kor'}/>
      <IFField name={'gender'} label={'Neme'}/>
    </FormLayout>
  </Main>
</Template>;

export const DEFAULT = {
  args: {
    formData: {
        name: 'Gergő',
        age: 10,
        gender: 'Férfi'
    },
    classes: 'flex-row flex-wrap gap-1 pa-2',
    borderColor: 'lightgrey',
    onChange: (data: FormDataType) => console.log(data),
  },
  render: (args: FormLayoutTypes) => DefaultTemplate(args),
};
