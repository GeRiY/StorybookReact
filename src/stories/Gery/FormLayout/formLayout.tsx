// @ts-ignore
import React from 'react';
import './formLayout.scss';
import './margin.scss';
import './padding.scss';
import {IFField} from "../IFField/IFField";
import {FormLayoutTypes, StyleTypes} from "./interface";

export const FormLayout = ({ ...props }: FormLayoutTypes) => {
    const style: StyleTypes = {}
    if (props.borderColor) {
        style.border = `1px solid ${props.borderColor}`;
    }

    if (props.width) {
        style.width = props.width;
    }

    return (
        <div className={`flex ${props.classes}`} style={style}>
            {props.children &&
                React.Children.map(props.children, (child) => {
                    let modifiedChild = child;
                    if (child.type) {
                        if (child.type.name.substring(0,2) === 'IF') {
                            modifiedChild = React.cloneElement(child, {
                                onChange: (e) => {
                                    if (props.onChange) {
                                        props.onChange(e);
                                    }
                                },
                                value: props.formData[child.props.name].toString()
                            });
                        }
                        if (child.type.name === 'FormLayout') {
                            modifiedChild = React.cloneElement(child, {
                                onChange: (e) => {
                                    if (props.onChange) {
                                        props.onChange(e);
                                    }
                                },
                                formData: props.formData
                            });
                        }
                    }
                    return modifiedChild;
                })}
        </div>
    );
};
