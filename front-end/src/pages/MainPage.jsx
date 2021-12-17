/* eslint-disable */
import React, {useState} from 'react';
import './MainPage.css';
import postData from '../services/postData';
import LabelInput from '../components/LabelInput';


export default function MainPage() {
  const [wallOneHeight, setWallOneHeight] = useState();
  const [wallOneLength, setWallOneLength] = useState();
  const [doorsOne, setDoorsOne] = useState(0);
  const [windowsOne, setWindowsOne] = useState(0);

  const [wallTwoHeight, setWallTwoHeight] = useState();
  const [wallTwoLength, setWallTwoLength] = useState();
  const [doorsTwo, setDoorsTwo] = useState(0);
  const [windowsTwo, setWindowsTwo] = useState(0);
  
  const [wallThreeHeight, setWallThreeHeight] = useState();
  const [wallThreeLength, setWallThreeLength] = useState();
  const [doorsThree, setDoorsThree] = useState(0);
  const [windowsThree, setWindowsThree] = useState(0);

  const [wallFourHeight, setWallFourHeight] = useState();
  const [wallFourLength, setWallFourLength] = useState();
  const [doorsFour, setDoorsFour] = useState(0);
  const [windowsFour, setWindowsFour] = useState(0);
  const [cans, setCans] = useState({
    xLarge: 0,
    large: 0,
    medium: 0,
    small: 0,
  });
  const [error, setError] = useState('');

  let info = {
    wallOneHeight, wallOneLength,
    doorsOne, windowsOne,
    wallTwoHeight, wallTwoLength,
    doorsTwo, windowsTwo,
    wallThreeHeight, wallThreeLength,
    doorsThree, windowsThree,
    wallFourHeight, wallFourLength,
    doorsFour, windowsFour,
  };

  return (
    <div>
      <form className='form'>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Info parede 1</h5>
            <LabelInput entity='paredeA1' text='Altura Parede 1' handleChange={setWallOneHeight}/>
            <LabelInput entity='paredeL1' text='Largura parede 1' handleChange={setWallOneLength}/>
            <LabelInput entity='portasP1' text='Portas parede 1' handleChange={setDoorsOne}/>
            <LabelInput entity='janelasP1' text='Janelas parede 1' handleChange={setWindowsOne}/>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Info parede 2</h5>
            <LabelInput entity='paredeA2' text='Altura Parede 2' handleChange={setWallTwoHeight}/>
            <LabelInput entity='paredeL2' text='Largura parede 2' handleChange={setWallTwoLength}/>
            <LabelInput entity='portasP2' text='Portas parede 2' handleChange={setDoorsTwo}/>
            <LabelInput entity='janelasP2' text='Janelas parede 2' handleChange={setWindowsTwo}/>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Info parede 3</h5>
            <LabelInput entity='paredeA3' text='Altura Parede3' handleChange={setWallThreeHeight}/>
            <LabelInput entity='paredeL3' text='Largura parede3' handleChange={setWallThreeLength}/>
            <LabelInput entity='portasP3' text='Portas parede 3' handleChange={setDoorsThree}/>
            <LabelInput entity='janelasP3' text='Janelas parede 3' handleChange={setWindowsThree}/>
          </div>
        </div>
        <div className='card'>
          <div className='card-body'>
            <h5 className='card-title'>Info parede 4</h5>
            <LabelInput entity='paredeA4' text='Altura Parede: 4' handleChange={setWallFourHeight}/>
            <LabelInput entity='paredeL4' text='Largura parede: 4' handleChange={setWallFourLength}/>
            <LabelInput entity='portasP4' text='Portas parede 4: ' handleChange={setDoorsFour}/>
            <LabelInput entity='janelasP4' text='Janelas parede 4: ' handleChange={setWindowsFour}/>
          </div>
        </div>   
      </form>
      <section>
        <div className='card result'>
          <h5 className='card-title'>Total latas</h5>
          {Object.entries(cans).map(([size, quantity], index) => <p key={index}>{`${size}: ${quantity}`}</p>)}
          <p>{error}</p>
          <button type="button" className='btn btn-primary calculate' onClick={() => postData(info, setCans, setError)}>Calcular</button>
        </div>
      </section>
    </div>
  )
};
