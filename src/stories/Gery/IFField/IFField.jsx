import React from 'react';
import PropTypes from 'prop-types';
import './IFField.css';
import '../FormLayout/formLayout.css';
import '../FormLayout/margin.css';
import '../FormLayout/padding.css';

export const IFField = ({name, value, label, ...props}) => {
    const handleChange = (e) => {
        if (props.onChange) {
            props.onChange({ name, value: e.target.value });
        }
    }

    return (
        <div className={'field'}>
            <div className={'flex-row'}>
                <span className={'flex-row justify-content-center'}
                      style={{
                          color: 'white',background: '#2f9df8', padding: '3px',
                          fontFamily: 'Titillium Web, sans-serif',
                }}
                >
                    TA
                </span>&nbsp;
                <label className={'flex-row justify-content-start'}
                       style={{
                           fontFamily: 'Titillium Web, sans-serif',
                       }}
                >
                    {label}:
                </label>
            </div>
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

IFField.propTypes = {
    name: PropTypes.string,
    value: PropTypes.string,
    label: PropTypes.string,
    width: PropTypes.string,
    onChange: PropTypes.func
};

IFField.defaultProps = {
    name: '',
    value: '',
    label: '',
    width: '100px',
    onChange: (data) => {
        console.log('inputField component',data);
    }
};
