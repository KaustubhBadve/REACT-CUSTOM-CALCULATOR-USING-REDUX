import './App.css';
import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { COUNTER_DECREMENT, COUNTER_INCREMENT } from './store/Acxtion.type';
import { Add, Subtract } from './store/action';

function App() {
 const dispatch= useDispatch()
  const count=useSelector((state)=>state.count)
  return (
    <div className="App">
     <h1>Counter : {count}</h1>
     <button onClick={()=>dispatch(Subtract())}>-</button>
     <button onClick={()=>dispatch(Add())}>+</button>
    </div>
  );
}

export default App;
