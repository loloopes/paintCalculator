/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';

export default function LabelInput({wall ,dimension, setDimension}) {
  return (
    <>
      <label htmlFor={wall}>{dimension}</label>
      <input id={wall} name={wall} type='text' onChange={({target: {value}}) => setDimension(value)}/>
    </>
  );
}

LabelInput.propTypes = {
  wall: PropTypes.string,
  dimension: PropTypes.string,
}.isRequired;
