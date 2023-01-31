import "./App.css";
import { useState } from "react";
function App() {
  const [count, SetCount] = useState(0);
  const incrementCounter = () => {
    SetCount(count + 1);
  };
  const decrementCounter = () => {
    if (count > 0) {
      SetCount(count - 1);
    }
  };
  const clearCounter = () =>{
    SetCount(0);
  };
  return (
    <div>
      <div className="main">
      <h4>COUNTER</h4>
        <div className="card">
          <div className="Count">Count</div>
          <div className="CountNumber">{count}</div>
          <div className="increment_buttons">
            <button onClick={incrementCounter} className="increment">Increment</button>
            <button onClick={decrementCounter} className="decrement">Decrement</button><br></br><br></br>
            <button onClick={clearCounter} className="clear">Reset</button>
          </div>
        </div>
        <p className="credit"> Name - Kumari Simran Sinha, RegistrationNo - 12007686</p>
      </div>
    </div>
  );
}

export default App;
