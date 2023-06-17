import React, {useEffect} from 'react';
import PropTypes from 'prop-types';
import './flex.css';
import './margin.css';
import './padding.css';

export const Flex = ({ ...props }) => {
    const style = {}
    if (props.borderColor) {
        style.border = `1px solid ${props.borderColor}`;
    }
    return (
        <div className={`flex ${props.classes}`} style={style}>
            {props.children &&
                React.Children.map(props.children, (child) => {
                    let modifiedChild = child;
                    if (child.type.name === 'InputField') {
                         modifiedChild = React.cloneElement(child, {
                            onChange: (e) => {
                                if (props.onChange) {
                                    props.onChange(e);
                                }
                            },
                            value: props.formData[child.props.name].toString()
                        });
                    }
                    if (child.type.name === 'Flex') {
                        modifiedChild = React.cloneElement(child, {
                            onChange: (e) => {
                                if (props.onChange) {
                                    props.onChange(e);
                                }
                            },
                            formData: props.formData
                        });
                    }
                    return modifiedChild;
                })}
        </div>
    );
};

Flex.propTypes = {
    classes: PropTypes.string,
    formData: PropTypes.object,
    children: PropTypes.node,
    borderColor: PropTypes.string,
    onChange: PropTypes.func
};

Flex.defaultProps = {
    classes: '',
    formData: {},
    onChange: (data) => {
        console.log('from Flex component',data);
    }
};
