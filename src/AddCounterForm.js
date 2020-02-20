import React, {useState} from 'react';
import './App.css';

function AddCounterForm(props) {

  const [name, setName] = useState ('type name')
  const [value, setValue] = useState ('type value');

  const onSubmit = (name, value) => {
    props.onSubmit(name, Number(value));
    setName('');
    setValue(0);
  };

  return (
  <div>
    Add new counter
    <input type="text" value={name} onChange={e => setName(e.target.value)}/>
    <input type="text" value={value} onChange={e => setValue(e.target.value)}/>

    <button onClick={()=> onSubmit(name, value)}>Create</button>
  </div>
  );
}

export default AddCounterForm;
