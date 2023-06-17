import React from 'react';
import PropTypes from 'prop-types';
import './inputField.css';
import './../Flex/flex.css';
import './../Flex/margin.css';
import './../Flex/padding.css';

export const InputField = ({name, value, label, ...props}) => {
    const handleChange = (e) => {
        if (props.onChange) {
            props.onChange({ name, value: e.target.value });
        }
    }

    return (
        <div className={'field'}>
            <label className={'mb-1'} style={{fontWeight: 'bold'}}>{label}:</label>
            <input
                className={'pa-1 input-element'}
                style={{ border: '1px solid lightgrey', width: props.width }}
                type="text"
                defaultValue={value}
                onChange={handleChange}
                autoCapitalize="none"
            />
        </div>
    );
};

InputField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    width: PropTypes.string,
    onChange: PropTypes.func
};

InputField.defaultProps = {
    name: '',
    value: '',
    label: '',
    width: '100px',
    onChange: (data) => {
        console.log('inputField component',data);
    }
};
