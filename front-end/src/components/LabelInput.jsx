import React from 'react'

export default function LabelInput({wall ,dimension}) {
  console.log(dimension)
  return (
    <div>
      <label htmlFor={wall}>{dimension}</label>
      <input id={wall} name={wall} type='text'/>
    </div>
  )
}
