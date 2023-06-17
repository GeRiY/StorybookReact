import React from 'react';
import PropTypes from 'prop-types';
import './form.css';

export const Form = ({...props}) => {
    const [formData, setFormData] = React.useState(props.formData);

    const handleChange = (field) => {
        setFormData({
            ...formData,
            [field.name]: field.value
        });
        if (props.onChange) {
            props.onChange(formData);
        }
    }

    return (
        <div className={'form'}>
            {props.children &&
                React.Children.map(props.children, (child) => {
                    const modifiedChild = React.cloneElement(child, {
                        onChange: (e) => {
                            handleChange(e);
                        },
                        formData: formData
                    });
                    return modifiedChild;
                })}
        </div>
    );
};

Form.propTypes = {
    formData: PropTypes.object,
    children: PropTypes.node,
    onChange: PropTypes.func
};

Form.defaultProps = {
    formData: {
        name: 'John Doe',
        age: '18',
        gender: 'Male'
    },
    onChange: (data) => {
        console.log(data);
    }
};
