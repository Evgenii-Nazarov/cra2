import React, {useState} from 'react';
import './App.css';

function AddCounterForm(props) {

    const [name, setName] = useState('type name')
    const [value, setValue] = useState('type value');

    const onSubmit = (name, value) => {
        props.onSubmit(name, Number(value));
        setName('');
        setValue(0);
    };

    return (
        <div className='row'>
            <div className="col">
                <p>Add new counter</p>

            </div>
            <div className="col">

                <input className="form-control" type="text" value={name} onChange={e => setName(e.target.value)}/>
            </div>
            <div className="col">

                <input className="form-control" type="text" value={value} onChange={e => setValue(e.target.value)}/>
            </div>
            <div className="col">

                <button className="btn btn-primary" onClick={() => onSubmit(name, value)}>Create</button>
            </div>
        </div>
    );
}

export default AddCounterForm;
