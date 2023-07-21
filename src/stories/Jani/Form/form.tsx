// @ts-ignore
import React from 'react';
import './form.scss';
import {FormTypes,FormDataType} from "./interface";

export const Form = ({...props}:FormTypes) => {
    const [formDataInner, setFormDataInner] = React.useState<FormDataType>(props.formData);

    const handleChange = (field) => {
        const data = {
            ...formDataInner,
            [field.name]: field.value
        }
        setFormDataInner(data);
        if (props.onChange) {
            props.onChange(data);
        }
    }

    return (
        <div className={'form'}>
            {props.children &&
                React.Children.map(props.children, (child) => {
                    let modifiedChild = child;
                    if (child.type.name === 'FormLayout') {
                         modifiedChild = React.cloneElement(child, {
                            onChange: handleChange,
                            formData: formDataInner
                         });
                    }
                    return modifiedChild;
                })}
        </div>
    );
};

