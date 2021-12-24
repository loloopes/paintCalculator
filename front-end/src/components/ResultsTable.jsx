/* eslint-disable react/function-component-definition */
import PropTypes from 'prop-types';
import React from 'react';

export default function ResultsTable({ cans }) {
  return (
    <section>
      <h3>Melhor Compra</h3>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Latas de 18L</th>
            <th scope="col">Latas de 3.6L</th>
            <th scope="col">Latas de 2.5L</th>
            <th scope="col">Latas de 0.5L</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {Object.values(cans).map((value) => <td>{value}</td>)}
          </tr>

        </tbody>
      </table>

    </section>
  );
}

ResultsTable.propTypes = {
  cans: PropTypes.object,
}.isRequired;
