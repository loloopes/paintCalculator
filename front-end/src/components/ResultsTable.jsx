/* eslint-disable react/function-component-definition */
import PropTypes from 'prop-types';
import React from 'react';

export default function ResultsTable({ cans }) {
  return (
    <section>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Latas de 18</th>
            <th scope="col">Latas de 3.6</th>
            <th scope="col">Latas de 2.5</th>
            <th scope="col">Latas de 0.5</th>
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
