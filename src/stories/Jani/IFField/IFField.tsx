// @ts-ignore
import React from 'react';
import './IFField.scss';
import '../FormLayout/formLayout.scss';
import '../FormLayout/margin.scss';
import '../FormLayout/padding.scss';
import {IFFieldProps} from "./interface";

export const IFField = ({name, value, label, ...props}: IFFieldProps) => {
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