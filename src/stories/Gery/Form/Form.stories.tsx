// @ts-ignore
import React from "react";
import {action} from "@storybook/addon-actions";
import {Form} from './form';
import {FormTypes} from "./interface";
import {IFField} from "../IFField/IFField";
import {FormLayout} from "../FormLayout/formLayout";
import Template from "../template";

export default {
  title: 'Gery/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    formData: {control: 'object'},
  },
};

const Main = (args) => <Form {...args}>{args.children}</Form>;

const DefaultTemplate = (args) => <Template>
  <Main {...args}>
    <FormLayout classes={'gap-1'}>
      <IFField name={'name'} label={'Név'}/>
      <IFField name={'age'} label={'Kor'}/>
      <IFField name={'gender'} label={'Neme'}/>
    </FormLayout>
  </Main>
</Template>;

const DefaultArgs: FormTypes = {
  formData: {
    name: 'Gergő',
    age: 10,
    gender: 'Férfi',
  },
  onChange: (data) => {
    console.log(data);
    action(data);
  }
}
export const Default = {
  args: DefaultArgs,
  render: (args: FormTypes) => DefaultTemplate(args),
};
