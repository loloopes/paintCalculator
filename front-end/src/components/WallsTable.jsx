/* eslint-disable react/function-component-definition */
import React from 'react';
import PropTypes from 'prop-types';

export default function WallsTable({ walls }) {
  return (
    <section>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">#</th>
            <th scope="col">Altura da parede</th>
            <th scope="col">Largura da parede</th>
            <th scope="col">Portas</th>
            <th scope="col">Janelas</th>
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
  );
}

WallsTable.propTypes = {
  walls: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
