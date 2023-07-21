// @ts-ignore
import React from 'react';
import './form.scss';
import { FormTypes, FormDataType } from "./interface";

export const Form = ({ ...props }: FormTypes) => {

    return (
        <div className={'form'}>
            <form>
                <label>
                    Name:
                    <input type="text" name="name" />
                </label>
                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
