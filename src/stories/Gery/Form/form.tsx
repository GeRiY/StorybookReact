// @ts-ignore
import React from 'react';
import './form.css';
// @ts-ignore
import {IFField} from "../IFField/IFField.tsx";
// @ts-ignore
import {FormLayout} from "../FormLayout/formLayout.tsx";

export const Form = ({...props}:FormTypes) => {
    const [formData, setFormData] = React.useState(props.formData);

    const handleChange = (field) => {
        const data = {
            ...formData,
            [field.name]: field.value
        }
        setFormData(data);
        if (props.onChange) {
            props.onChange(data);
        }
    }

    if (props.isTest) {
        props.children = (
            <FormLayout classes={'gap-1'}>
                <IFField name={'name'} label={'Név'} />
                <IFField name={'age'} label={'Kor'} />
                <IFField name={'gender'} label={'Neme'}/>
            </FormLayout>
        );
    }

    return (
        <div className={'form'}>
            {props.children &&
                React.Children.map(props.children, (child) => {
                    let modifiedChild = child;
                    if (child.type.name === 'FormLayout') {
                         modifiedChild = React.cloneElement(child, {
                            onChange: handleChange,
                            formData: formData
                         });
                    }
                    return modifiedChild;
                })}
        </div>
    );
};

interface FormTypes {
    formData: object,
    children: any,
    isTest?: boolean,
    onChange: Function
}