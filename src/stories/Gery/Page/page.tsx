// @ts-ignore
import React, {useState} from 'react';
import './page.css';
// @ts-ignore
import { Form } from '../Form/form.tsx';
// @ts-ignore
import {FormLayout} from "../FormLayout/formLayout.tsx";
// @ts-ignore
import {IFField} from "../IFField/IFField.tsx";

export const Page = ({ ...props }: PagePropsType) => {
  const [formDataState, setFormDataState] = useState(props.formData);

  return (
    <div className={'page'}>
        <Form onChange={(data) => setFormDataState(data)} formData={formDataState}>
            <FormLayout classes={props.firstLayoutClasses} width={"100%"}>
                <FormLayout classes={props.secondLayoutClasses} width={"100%"}>
                    <IFField name={'name'} label={'Név'} />
                    <IFField name={'age'} label={'Kor'} />
                    <IFField name={'gender'} label={'Neme'}/>
                </FormLayout>
            </FormLayout>
        </Form>
        <div style={{paddingLeft: '30px'}}>
            {JSON.stringify(formDataState, null, 2)}
        </div>
    </div>
  );
};

interface PagePropsType {
    children?: any;
    firstLayoutClasses?: string;
    secondLayoutClasses?: string;
    formData: object;
}
