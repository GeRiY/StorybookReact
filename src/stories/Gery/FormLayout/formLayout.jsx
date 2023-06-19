import React from 'react';
import PropTypes from 'prop-types';
import './formLayout.css';
import './margin.css';
import './padding.css';
import {IFField} from "../IFField/IFField.jsx";

export const FormLayout = ({ ...props }) => {
    const style = {}
    if (props.borderColor) {
        style.border = `1px solid ${props.borderColor}`;
    }

    if (props.width) {
        style.width = props.width;
    }

    if (props.isTest) {
        props.children = (
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

FormLayout.propTypes = {
    classes: PropTypes.string,
    formData: PropTypes.object,
    children: PropTypes.node,
    borderColor: PropTypes.string,
    onChange: PropTypes.func,
    width: PropTypes.string,
    isTest: PropTypes.bool
};

FormLayout.defaultProps = {
    classes: '',
    formData: {},
    isTest: false,
    onChange: (data) => console.log('from Flex component',data)
};
