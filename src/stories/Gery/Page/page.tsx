// @ts-ignore
import React from 'react';
import './page.css';
// @ts-ignore
import { Form } from '../Form/form.tsx';
// @ts-ignore
import {FormLayout} from "../FormLayout/formLayout.tsx";
// @ts-ignore
import {IFField} from "../IFField/IFField.tsx";

export const Page = ({ ...props }: PagePropsType) => {
  return (
    <div className={'page'}>
        <Form onChange={(data) => console.log(data)} formData={props.formData}>
            <FormLayout classes={props.firstLayoutClasses} width={"100%"}>
                <FormLayout classes={props.secondLayoutClasses} width={"100%"}>
                    <IFField name={'name'} label={'Név'} />
                    <IFField name={'age'} label={'Kor'} />
                    <IFField name={'gender'} label={'Neme'}/>
                </FormLayout>
            </FormLayout>
        </Form>
    </div>
  );
};

interface PagePropsType {
    children?: any;
    firstLayoutClasses?: string;
    secondLayoutClasses?: string;
    formData: object;
}
