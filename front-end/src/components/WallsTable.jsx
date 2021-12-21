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
  );
}

WallsTable.propTypes = {
  walls: PropTypes.arrayOf(PropTypes.object),
}.isRequired;
