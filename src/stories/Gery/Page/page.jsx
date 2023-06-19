import React from 'react';
import './page.css';
import { Form } from './../Form/form.jsx';
import {FormLayout} from "../FormLayout/formLayout.jsx";
import {IFField} from "../IFField/IFField.jsx";

export const Page = ({ ...props }) => {
  return (
    <div className={'page'}>
        <Form onChange={(data) => console.log(data)}>
            <FormLayout classes={'gap-1 pa-2'}>
                <FormLayout classes={'gap-1'}>
                    <IFField name={'name'} label={'Név'} />
                    <IFField name={'age'} label={'Kor'} />
                    <IFField name={'gender'} label={'Neme'}/>
                </FormLayout>
            </FormLayout>
        </Form>
    </div>
  );
};

Page.propTypes = {};

Page.defaultProps = {};
