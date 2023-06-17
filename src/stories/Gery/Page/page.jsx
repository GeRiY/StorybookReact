import React from 'react';
import PropTypes from 'prop-types';
import './page.css';
import { Form } from './../Form/form.jsx';
import {Flex} from "../Flex/flex.jsx";
import {InputField} from "../InputField/inputField.jsx";

export const Page = ({ ...props }) => {
  return (
    <div className={'page'}>
        <Form onChange={(data) => console.log(data)}>
            <Flex classes={'gap-1 pa-2'}>
                <Flex classes={'gap-1'}>
                    <InputField name={'name'} label={'Név'} />
                    <InputField name={'age'} label={'Kor'} />
                    <InputField name={'gender'} label={'Neme'}/>
                </Flex>
            </Flex>
        </Form>
    </div>
  );
};

Page.propTypes = {};

Page.defaultProps = {};
