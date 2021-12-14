import React from 'react';

import LabelInput from '../components/LabelInput';

export default function MainPage() {
  return (
    <>
        <form action='submit'>
         <LabelInput wall='alturaParede1'/>
         <LabelInput wall='larguraParede1'/>
         <LabelInput wall='alturaParede2'/>
         <LabelInput wall='larguraParede2'/>
         <LabelInput wall='alturaParede3'/>
         <LabelInput wall='larguraParede3'/>
         <LabelInput wall='alturaParede4'/>
         <LabelInput wall='larguraParede4'/>
        </form>
    </>
  )
}