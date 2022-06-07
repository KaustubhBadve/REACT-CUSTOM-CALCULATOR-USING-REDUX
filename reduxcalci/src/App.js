import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { ADD,DECREMENT, DIVIDE, INCREMENT, MULTIPLY, SUBTRACT, X } from './Store/Action.type';
import { useState } from 'react';

function App() {
  const dispatch=useDispatch()
  
  const count=useSelector((state)=>state.count)

  const [inputvalue, setInputvalue] = useState("")

  const payload=useSelector((state)=>state.payload=inputvalue)
  console.log(count,"payload",payload)
  return (
    <div className="App">
      <h1>Calculator By REDUX</h1>
      <div className='main'>
      <div className='count'>
         {count}
      </div>
      <div>
      <input placeholder='Enter Value' value={inputvalue} onChange={(e)=>setInputvalue(e.target.value)}/>
      </div>
      <div>
        <button style={{width:"150px"}} onClick={()=>dispatch({type:INCREMENT})} >Increment</button>
        <button style={{width:"150px"}} onClick={()=>dispatch({type:DECREMENT})}>Decrement</button>
      </div>
      <div style={{display:"flex",justifyContent:"center",gap:"20px",marginTop:"20px"}}>
        <div>
            <button onClick={()=>dispatch({type:X})}>X</button>
        </div>
        <div>
            <div>
              <button onClick={()=>dispatch({type:ADD, payload:inputvalue})}>Add</button>
              <button onClick={()=>dispatch({type:MULTIPLY})}>Multiply</button>
              </div>
            <div>
            <button onClick={()=>dispatch({type:SUBTRACT})}>Subtract</button>
              <button onClick={()=>dispatch({type:DIVIDE})}>Divide</button>
            </div>
        </div>
      </div>
      </div>
    </div>
  );
}

export default App;
