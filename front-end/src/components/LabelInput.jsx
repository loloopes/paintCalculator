/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';
import question from '../images/question-circle.svg';

export default function LabelInput({ entity, text, handleChange }) {
  return (
    <div className="input-group mb-2">
      <input id={entity} name={entity} placeholder={text} type="number" className="form-control" onChange={({ target: { value } }) => handleChange(value)} />
      <button type="button" data-toggle="modal" data-target="#modal" className="input-group-text" title={entity}><img src={question} alt="questionMarkBtn" /></button>
    </div>
  );
}

LabelInput.propTypes = {
  wall: PropTypes.string,
  dimension: PropTypes.string,
}.isRequired;
