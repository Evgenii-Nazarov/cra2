import React, {useState} from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.css'
import Counter from "./Counter";
import AddCounterForm from "./AddCounterForm";


function App() {

    const InitialCounterState = [
        {name: 'Counter 1', value: 3, id:'123'},
        {name: 'Counter 2', value: 1, id:'234'},
        {name: 'Counter 3', value: 7, id:'345'},
    ];

    const [counters, setCounters] = useState(InitialCounterState);

    const incrementCount = (id) => {
        const newCounters = counters.map(el => {
            if (el.id === id) return {...el, value: el.value + 1};
            return el;
        });
        setCounters(newCounters);
    };

    const decrementCount = (id) => {
        const newCounters = counters.map(el => {
            if (el.id === id) return {...el, value: el.value - 1};
            return el;
        });
        setCounters(newCounters);
    };

    const resetTotalCount = () => {
        const newCounters = counters.map(el => ({...el, value: 0}) );
        setCounters(newCounters);
    };

    const addCounter = (name, value) => {
        console.log('fefe')
        const newCounters = [...counters, {
            id: Math.random(),
            name,
            value
        }];
        setCounters(newCounters);
    };

    const removeCounter = (id) => {
        const newCounters = counters.filter(el => el.id !== id );
        setCounters(newCounters);
    };

    const stateNewValue = (id, newValue) => {
        const newCounters = counters.map(el => {
            if (el.id === id) return {...el, value: newValue};
            return el;
        });
        setCounters(newCounters);
    };

  return (
      <div className='container'>
          Total count {counters.reduce((acc,el) => acc + el.value, 0)}
          <hr/>
          <button onClick={resetTotalCount}>Reset total count</button>
          <hr/>
          {
              counters.map(el => <Counter name={el.name}
                                          value={el.value}
                                          id={el.id}
                                          key={el.id}
                                          increment={incrementCount}
                                          decrement={decrementCount}
                                          remove={removeCounter}
                                          stateNewValue={stateNewValue}
              />)
          }
          <hr/>
          <AddCounterForm onSubmit={addCounter}/>
      </div>
  )
}

export default App;
