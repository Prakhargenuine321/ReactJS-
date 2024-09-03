import { useState } from "react";
import "./App.css";

function App() {
  // let counter = 15;

  //1)jab humnae following code chalaya toh "counter" update toh ho raha button click karne par but
  //value page maein update nahi ho rhi hai.

  //2)so we are using "hooks"
  let [counter, setCounter] = useState(15); //"counter" -->current value and "setCounter" -->function to update the state

  const addValue = () => {
    if (counter < 20) {
      console.log(counter);
      counter = counter + 1;
      setCounter(counter); //jab hum setCounter call karte hain react queues a state update and re-render component.
      //But yaeh update turant nahi hota hai woh update ko queue maein rakhta hai and re-render kae time par 
      //woh queue of states ko process karta hai to determine "new-state".

      //yahan ppar aek important interview question hai ki agar hum kuch aisa kar daein-->
      // setCounter(counter + 1); //16
      // setCounter(counter + 1); //16
      // setCounter(counter + 1); //16
      // setCounter(counter + 1); //16

      //toh value kya hogi

      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);
      // setCounter((prevCounter) => prevCounter + 1);

      //so first waale maein it will be "16" and uskae baad wale maein bhi it will be "16" 
      //because "counter" ki state update schedule hui hai but abhi update nahi hui hai.

      //and second waale maein "previous state" ka use kiya ja raha to compute "newState" 
      //har aek setCounter correctly update karega based on latest state kyunki woh "counter"
      //ki state value par rely nahi kar raha hai.

      /* but yaad rakhna above method is not good so try to avoid it! */
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
