import { IFField } from './IFField.tsx';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
export default {
  title: 'Gery/IF-Field',
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

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const DEFAULT = {
  args: {
    name: 'name',
    value: 'Gergő',
    label: 'Név',
    width: '10%',
    onChange: (data) => {
      console.log(data)
    }
  },
};
