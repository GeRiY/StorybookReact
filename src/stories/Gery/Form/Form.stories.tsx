// @ts-ignore
import React from "react";
import {action} from "@storybook/addon-actions";
import {Form} from './form';
import {FormTypes} from "./interface";
import {IFField} from "../IFField/IFField";
import {FormLayout} from "../FormLayout/formLayout";

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Gery/Form',
  component: Form,
  tags: ['autodocs'],
  argTypes: {
    formData: {control: 'object'},
  },
};

const Template = (args: FormTypes) => <div style={{padding: '10px'}}>
  <Form {...args}>
    <FormLayout classes={'gap-1'}>
      <IFField name={'name'} label={'Név'}/>
      <IFField name={'age'} label={'Kor'}/>
      <IFField name={'gender'} label={'Neme'}/>
    </FormLayout>
  </Form>
</div>;


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
  render: (args) => Template(args),
};
