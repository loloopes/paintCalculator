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
              <li>
                Cada janela possui as medidas: 2,00 x 1,20 mtos
                Cada porta possui as medidas: 0,80 x 1,90
              </li>
              <li>
                O indice do erro + 1 equivale ao numero da parede com problemas em questao.
                Exemplo : [5].wallHeight must be greater than or equal to 2.2, significa que
                a parede de numero 6 deve ter altura maior ou igual a 2.2m
              </li>
            </ol>
          </div>
        </div>
      </div>
    </div>
  );
}
