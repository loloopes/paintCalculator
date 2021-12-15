/* eslint-disable */
import React, {useState} from 'react';
// import axios from 'axios';
import postData from '../services/postData';

import LabelInput from '../components/LabelInput';

export default function MainPage() {
  const [wallOneHeight, setWallOneHeight] = useState();
  const [wallOneLength, setWallOneLength] = useState();
  const [wallTwoHeight, setWallTwoHeight] = useState();
  const [wallTwoLength, setWallTwoLength] = useState();
  const [wallThreeHeight, setWallThreeHeight] = useState();
  const [wallThreeLength, setWallThreeLength] = useState();
  const [wallFourHeight, setWallFourHeight] = useState();
  const [wallFourLength, setWallFourLength] = useState();
  const [area, setArea] = useState(199);

  let info = {
    wallOneHeight, wallOneLength,
    wallTwoHeight, wallTwoLength,
    wallThreeHeight, wallThreeLength,
    wallFourHeight, wallFourLength,
  };

  return (
    <div>
      <form>
        <LabelInput wall='paredeA1' dimension='Altura Parede 1: ' setDimension={setWallOneHeight}/>
        <LabelInput wall='paredeL1' dimension='Largura parede 1: ' setDimension={setWallOneLength}/>
        <LabelInput wall='paredeA2' dimension='Altura Parede: 2' setDimension={setWallTwoHeight}/>
        <LabelInput wall='paredeL2' dimension='Largura parede: 2' setDimension={setWallTwoLength}/>
        <LabelInput wall='paredeA3' dimension='Altura Parede: 3' setDimension={setWallThreeHeight}/>
        <LabelInput wall='paredeL3' dimension='Largura parede: 3' setDimension={setWallThreeLength}/>
        <LabelInput wall='paredeA4' dimension='Altura Parede: 4' setDimension={setWallFourHeight}/>
        <LabelInput wall='paredeL4' dimension='Largura parede: 4' setDimension={setWallFourLength}/>
        <button type="button" onClick={() => postData(info, setArea) /*axios.post('http://localhost:3001/area', info).then((response) => console.log(response))*/}>Calcular</button>
      </form>
      <p>{area}</p>
    </div>
  )
};
