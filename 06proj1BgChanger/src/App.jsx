import { useState, useEffect } from "react"

function App() {

  //using useState() hook
  const [color, setColor] = useState("#000"); //1)here "color" is current state and "setColor" is function to update current state.

  //2)so ab question yae hai ki after refreshing the page color waapas sae default kyun ho ja raha hai:
  //-->kyunki useState() only manages state in memory so after refresh page re-renders and set to default color.
  //-->so agar wahi color chahiye jo last maein set hua tha you have to use "local-storage or session-storage"


  //so jo above discuss kiya usi ko replicate kiya hai just below-->

  // const [color, setColor] = useState(() => {
  //   // Retrieve the stored color from localStorage, or fall back to the default color
  //   return localStorage.getItem('backgroundColor') || "#000";
  // });

  // // Update localStorage whenever the color state changes
  // useEffect(() => {
  //   localStorage.setItem('backgroundColor', color);
  // }, [color]);

  return (
    <div className="w-full h-screen duration-200"
    style={{backgroundColor: color}}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <button
          onClick={() => setColor("red")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "red"}}
          >Red</button>
          <button
          onClick={() => setColor("green")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "green"}}
          >Green</button>
          <button
          onClick={() => setColor("blue")}
          className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
          style={{backgroundColor: "blue"}}
          >Blue</button>
        </div>
      </div>
    </div>
  )
}

export default App
