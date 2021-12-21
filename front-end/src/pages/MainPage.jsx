/* eslint-disable react/no-array-index-key */
/* eslint-disable react/function-component-definition */
import React, { useState } from 'react';
import './MainPage.css';
import postData from '../services/postData';
import LabelInput from '../components/LabelInput';
import Modal from '../components/Modal';

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

  const info = {
    wallHeight,
    wallLength,
    doors,
    windows,
  };

  return (
    <div>
      {/* Table walls starts */}
      <section>
        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">wallHeight</th>
              <th scope="col">wallLength</th>
              <th scope="col">doors</th>
              <th scope="col">windows</th>
            </tr>
          </thead>
          <tbody>
            {
              walls.map((wall, index) => (
                <tr>
                  <th scope="row">{index + 1}</th>
                  <td>{wall.wallHeight}</td>
                  <td>{wall.wallLength}</td>
                  <td>{wall.doors}</td>
                  <td>{wall.windows}</td>
                </tr>
              ))
            }
          </tbody>
        </table>

      </section>

      {/* Table ends */}

      <form className="form">
        <div className="card">
          <Modal />
          <div className="card-body">
            <h5 className="card-title">Info parede</h5>
            <LabelInput entity="paredeA1" text="Altura Parede 1" handleChange={setWallHeight} />
            <LabelInput entity="paredeL1" text="Largura parede 1" handleChange={setWallLength} />
            <LabelInput entity="portasP1" text="Portas parede 1" handleChange={setDoors} />
            <LabelInput entity="janelasP1" text="Janelas parede 1" handleChange={setWindows} />
          </div>
          <button
            type="button"
            className="btn btn-primary calculate"
            onClick={() => setWalls([...walls, {
              wallHeight, wallLength, doors, windows,
            }])}
          >
            Adicionar
          </button>
        </div>
      </form>
      <section>
        <div className="card result">
          <h5 className="card-title">Total latas</h5>
          {Object.entries(cans).map(([size, quantity], index) => <p key={index}>{`${size}: ${quantity}`}</p>)}
          <p>{error}</p>
          <button type="button" className="btn btn-primary calculate" onClick={() => postData(info, setCans, setError)}>Calcular</button>
        </div>
      </section>
    </div>
  );
}
