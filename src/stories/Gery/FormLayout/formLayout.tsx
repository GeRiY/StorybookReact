// @ts-ignore
import React from 'react';
import './formLayout.css';
import './margin.css';
import './padding.css';
// @ts-ignore
import {IFField} from "../IFField/IFField.tsx";

export const FormLayout = ({ ...props }: FormLayoutTypes) => {
    const style: StyleTypes = {}
    if (props.borderColor) {
        style.border = `1px solid ${props.borderColor}`;
    }

    if (props.width) {
        style.width = props.width;
    }

    if (props.isTest) {
        props.children = (
            // @ts-ignore
            <FormLayout classes={props.classes}>
                <IFField name={'name'} label={'Név'} />
                <IFField name={'age'} label={'Kor'} />
                <IFField name={'gender'} label={'Neme'}/>
            </FormLayout>
        );
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

interface StyleTypes {
    borderColor?: string;
    border?: string;
    width?: string;
}

interface FormLayoutTypes {
    classes?: string,
    formData?: object,
    children?: any,
    borderColor?: string,
    onChange?: Function,
    width?: string,
    isTest?: boolean
}
