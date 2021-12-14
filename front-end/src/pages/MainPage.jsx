import React from 'react';

import LabelInput from '../components/LabelInput';

export default function MainPage() {
  return (
    <>
      <form action='submit' method="PUT">
        <LabelInput wall='paredeA1' dimension='Altura Parede 1: '/>
        <LabelInput wall='paredeL1' dimension='Largura parede 1: '/>
        <LabelInput wall='paredeA2' dimension='Altura Parede: 2'/>
        <LabelInput wall='paredeL2' dimension='Largura parede: 2'/>
        <LabelInput wall='paredeA3' dimension='Altura Parede: 3'/>
        <LabelInput wall='paredeL3' dimension='Largura parede: 3'/>
        <LabelInput wall='paredeA4' dimension='Altura Parede: 4'/>
        <LabelInput wall='paredeL4' dimension='Largura parede: 4'/>
        <button type='submit'>Calcular</button>
      </form>
    </>
  )
}