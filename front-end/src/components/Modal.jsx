/* eslint-disable react/function-component-definition */
import React from 'react';

export default function Modal() {
  return (
    <div className="modal fade" id="modal" role="dialog" aria-labelledby="modalLabel" aria-hidden="true">
      <div className="modal-dialog" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="exampleModalLabel">Detalhes</h5>
            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            <ol>
              <li>
                Nenhuma parede pode ter menos de 1 metro
                quadrado nem mais de 15 metros quadrados,
                mas podem possuir alturas e larguras diferentes
              </li>
              <li>
                O total de área das portas e janelas deve ser
                no máximo 50% da área de parede
              </li>
              <li>
                A altura de paredes com porta deve ser,
                no mínimo, 30 centímetros maior que a altura
                da porta
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
