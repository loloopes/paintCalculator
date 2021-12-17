/* eslint-disable */
import React from 'react';
import PropTypes from 'prop-types';
import question from '../images/question-circle.svg'

export default function LabelInput({entity ,text, handleChange}) {
  return (
    <div className='input-group mb-2'>
      <input id={entity} name={entity} placeholder={text} type='number' className='form-control' onChange={({target: {value}}) => handleChange(value)}/>
      <button type='button' data-toggle='modal' data-target='#exampleModal' className='input-group-text' title='Maiores informacoes'><img src={question}/></button>
      
      <div className='modal' id='mymodal'>
        <div className='modal-dialog'>
          <div className='modal-content'>
            <div className='modal-header'>
              <h1>test</h1>
            </div>
          </div>
        </div>
      </div>
    
{/* <!-- Modal --> */}
      <div className="modal fade" id="exampleModal" tabIndex='1' role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
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
                <li>Nenhuma parede pode ter menos de 1 metro quadrado nem mais de 15 metros quadrados, mas podem possuir alturas e larguras diferentes</li>
                <li>O total de área das portas e janelas deve ser no máximo 50% da área de parede</li>
                <li>A altura de paredes com porta deve ser, no mínimo, 30 centímetros maior que a altura da porta</li>
              </ol>
            </div>
          </div>
        </div>
      </div>
      {/* End Modal */}
    </div>
  );
}

LabelInput.propTypes = {
  wall: PropTypes.string,
  dimension: PropTypes.string,
}.isRequired;
