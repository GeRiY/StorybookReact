// @ts-ignore
import React from "react";
import {Test} from "./test";
import Template from "../template";
export default {
  title: 'Rebeka/Teszt',
  component: Test,
  tags: ['autodocs'],
  argTypes: {},
};

const Main = (args) => <Test {...args}>{args.children}</Test>;

const DefaultTemplate = (args) => <Template>
  <Main {...args}>{args.children}</Main>
</Template>;
export const Default = {
  args: {},
  render: (args: object) => DefaultTemplate(args),
};