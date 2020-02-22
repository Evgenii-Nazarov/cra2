import React, {useState} from 'react';
import './App.css';

function Counter(props) {

    const [newValue, setNewValue] = useState('type new value');

    const stateNewValue = (id, newValue) => {
        props.stateNewValue(id, Number(newValue));
        setNewValue(0);
    };

    return (
        <div className="card mb-2">
            <div className="card-body">
                <div className="row">
                    <div className="col">

                        Counter name <strong>{props.name}</strong>
                    </div>
                    <div className="col">
                        counter value <strong>{props.value}</strong>

                    </div>
                    <div className="col">

                        <input type="text" value={newValue} onChange={e => setNewValue(e.target.value)}/>
                        <button onClick={() => stateNewValue(props.id, newValue)}>set</button>
                    </div>
                    <div className="col">

                        <button className="btn btn-outline-primary" onClick={() => props.decrement(props.id)}>-</button>
                        <button className="btn btn-outline-primary" onClick={() => props.increment(props.id)}>+</button>
                    </div>
                    <div className="col">

                        <button className="btn btn-danger" onClick={() => props.remove(props.id)}>delete</button>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default Counter;
