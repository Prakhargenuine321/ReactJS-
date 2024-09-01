import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 15;

  //1)jab humnae following code chalaya toh "counter" update toh ho raha button click karne par but
  //value page maein update nahi ho rhi hai.

  //2)so we are using "hooks"
  let [counter, setCounter] = useState(15);

  const addValue = () => {
    if (counter < 20) {
      console.log(counter);
      counter = counter + 1;
      setCounter(counter);
    }

    //3)you can also do it like as
    // setCounter(counter + 1);
  };

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1);
    }
  };

  return (
    //so classic JS maein hum agar kisi variable ko different places par update karna hota hai
    //toh hum "querySelector" wagera ka use karte hain baar-baar

    //but in react we have "hooks" to tackle this problem to update variable ki multiple occurences
    //and this is decided by "react" isliye hi isae "react" kahte hain because koi bhi
    //change hota hai yaeh turant react karti hai.
    <>
      <h1>Chai aur React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>remove value {counter}</button>
      <p>footer: {counter}</p>
    </>
  );
}

export default App;
