import React from 'react'

export default function LabelInput(wall) {
  return (
    <div>
      <label htmlFor={wall}>Altura parede 1:</label>
      <input id={wall} type='text'/>
    </div>
  )
}
