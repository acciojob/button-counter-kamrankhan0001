
import React,{useState} from "react";
import './../styles/App.css';

const App = () => {
  let [count,setCount] = useState(0);
  function increaseCount(){
    setCount(count+1)
  }
  return (
    <div>
        <p>Button clicked {count} times</p>
        <button onClick={increaseCount}>click me</button>
    </div>
  )
}

export default App;
