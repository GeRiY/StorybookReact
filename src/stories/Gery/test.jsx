import React from 'react';
import PropTypes from 'prop-types';
import './test.css';

export const Test = ({ ...props }) => {
  const text = 'Teszt';
  return (
    <div>
      Ez egy {text} komponens!
    </div>
  );
};

Test.propTypes = {};

Test.defaultProps = {};
