import { useReducer, useState } from 'react';
import './App.css';



function reducer(state, action) {
  switch (action.type) {
    case "DEC":
      return { count: state.count - 1 }

    case "INC":
      return { count: state.count + 1 }

    case "RESET":
      return { count: 0 }

    default:
      return state;
  }
}

function App() {

  const [state, dispatch] = useReducer(reducer, { count: 0 })
  // Advantages of useReducer over useState are : 
  //1. Everything can be wrapped inside a switch statement
  //2. No need to write different functions for every functionality
  //3. Results in Clean and reduced code and effort.

  const [count, setCount] = useState(0);

  let handleDecreament = () => {
    setCount(count - 1);
  }

  let handleReset = () => {
    setCount(0)
  }

  let handleIncreament = () => {
    setCount(count + 1);
  }

  return (
    <div className='container mt-5 pt-5'>
      <div className='row'>
        <div className='col-lg-12 d-flex justify-content-center'>

          <button className='btn btn-danger' onClick={handleReset}>Reset</button>
          <button className='btn btn-danger btn-lg mt-1' onClick={handleDecreament}>-</button>
          <div className='count'>{count}</div>
          <button className='btn btn-danger btn-lg mt-1 ml-2' onClick={handleIncreament}>+</button>


          <button className='btn btn-danger btn-lg mt-1 mr-2' onClick={() => { dispatch({ type: "DEC" }) }}>-</button>
          <div className='count'>{state.count}</div>
          <button className='btn btn-danger btn-lg mt-1' onClick={() => { dispatch({ type: "INC" }) }}>+</button>
          <button className='btn btn-danger' onClick={() => { dispatch({ type: "RESET" }) }}>Reset</button>

        </div>
      </div>



    </div>
  );
}

export default App;
