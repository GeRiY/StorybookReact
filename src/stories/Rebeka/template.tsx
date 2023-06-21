// @ts-ignore
import React from 'react';

export default ({children}: TemplateType) => {
    return (
        <div style={{padding: '20px'}}>
          {children}
        </div>
    );
};

interface TemplateType {
  children?: any;
}