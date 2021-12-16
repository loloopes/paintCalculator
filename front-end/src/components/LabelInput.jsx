/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export default function LabelInput({entity ,text, handleChange}) {
  return (
    <div className='input-group mb-2'>
      <span className='input-group-text'>{text}</span>
      <input id={entity} name={entity} type='number' className='form-control' onChange={({target: {value}}) => handleChange(value)}/>
    </div>
  );
}

LabelInput.propTypes = {
  wall: PropTypes.string,
  dimension: PropTypes.string,
}.isRequired;
