/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export default function LabelInput({entity ,text, handleChange}) {
  return (
    <>
      <label htmlFor={entity}>{text}</label>
      <input id={entity} name={entity} type='text' onChange={({target: {value}}) => handleChange(value)}/>
    </>
  );
}

LabelInput.propTypes = {
  wall: PropTypes.string,
  dimension: PropTypes.string,
}.isRequired;
