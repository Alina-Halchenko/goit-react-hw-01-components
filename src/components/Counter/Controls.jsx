import React from 'react';
import './Counter.css'

const Controls = ({onIncement, onDecrement}) => (
  <div className='Counter__controls'>
    <button type='button' onClick={onIncement}>Увеличить на 1</button>
    <button type='button' onClick={onDecrement}>Уменьшить на 1</button>
  </div>
)

export default Controls;