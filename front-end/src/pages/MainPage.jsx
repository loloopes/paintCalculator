/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import './MainPage.css';
import postData from '../services/postData';
import LabelInput from '../components/LabelInput';
import Modal from '../components/Modal';
import WallsTable from '../components/WallsTable';
import ResultTable from '../components/ResultsTable';

export default function MainPage() {
  const [wallHeight, setWallHeight] = useState();
  const [wallLength, setWallLength] = useState();
  const [doors, setDoors] = useState(0);
  const [windows, setWindows] = useState(0);

  const [walls, setWalls] = useState([]);
  const [cans, setCans] = useState({
    xLarge: 0,
    large: 0,
    medium: 0,
    small: 0,
  });
  const [error, setError] = useState('');

  return (
    <div>
      <div className="wallsCansTables">
        <WallsTable walls={walls} />
        <ResultTable cans={cans} />
      </div>

      <form className="form">
        <div className="card">
          <Modal />
          <div className="card-body">
            <h5 className="card-title">Info parede</h5>
            <LabelInput entity="Altura parede" text="Altura Parede 1" handleChange={setWallHeight} />
            <LabelInput entity="Largura parede" text="Largura parede 1" handleChange={setWallLength} />
            <LabelInput entity="Portas" text="Portas parede 1" handleChange={setDoors} />
            <LabelInput entity="Janelas" text="Janelas parede 1" handleChange={setWindows} />
          </div>
          <section className="btns">
            <button
              type="button"
              className="btn btn-primary calculate"
              onClick={() => setWalls([...walls, {
                wallHeight, wallLength, doors, windows,
              }])}
            >
              Adicionar
            </button>
            <button type="button" className="btn btn-primary calculate" onClick={() => postData(walls, setCans, setError)}>Calcular</button>
          </section>
        </div>
      </form>
      <section>
        <p>{error}</p>
      </section>
    </div>
  );
}
