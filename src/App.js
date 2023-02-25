
import './App.css';
import { useState } from "react";

function App() {
  
  const [count, setCount] = useState(0);
  
  const incrementCount = () => {
    setCount(count + 1);
  }

  const resetCount = () => {
    setCount(0);
  }

  const decrementCount = () => {
    setCount(count > 0 ? count - 1 : 0);
  }

  return (
    <div className="App">
        <h1>{count}</h1>
        <button onClick={incrementCount}>increment</button> 
        <button onClick={resetCount}>reset</button> 
        <button onClick={decrementCount}>decrement</button>
    </div>
  );

  
}



export default App;
