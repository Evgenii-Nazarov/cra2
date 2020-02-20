import React, {useState} from 'react';
import './App.css';

function Counter(props) {

  const [newValue, setNewValue] = useState('type new value');

  const stateNewValue = (id, newValue) => {
    props.stateNewValue(id, Number(newValue));
    setNewValue(0);
  };

  return (
  <div>
    Counter name <strong>{props.name}</strong>
    counter value <strong>{props.value}</strong>

    <input type="text" value={newValue} onChange={e => setNewValue(e.target.value)}/>
    <button onClick={() => stateNewValue(props.id, newValue)}>set</button>

    <button onClick={() => props.decrement(props.id)}>-</button>
    <button onClick={() => props.increment(props.id)}>+</button>
    <button onClick={() => props.remove(props.id)}>delete</button>
  </div>
  );
}

export default Counter;
