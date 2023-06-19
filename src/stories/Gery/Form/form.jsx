import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './form.css';
import {IFField} from "../IFField/IFField.jsx";
import {FormLayout} from "../FormLayout/formLayout.jsx";

export const Form = ({...props}) => {
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

Form.propTypes = {
    formData: PropTypes.object,
    children: PropTypes.node,
    isTest: PropTypes.bool,
    onChange: PropTypes.func
};

Form.defaultProps = {
    formData: {
        name: 'John Doe',
        age: '18',
        gender: 'Male'
    },
    isTest: false,
    onChange: (data) => console.log(data)
};
