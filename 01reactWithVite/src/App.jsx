import Chai from "./chai";

function App() {
  const userName = "Prakhar Patel";

  return (
    //in '.jsx' we can only return '1' element at a time so to
    //return multiple element we need to wrap it in a single element
    //for this we use: fragment-tag --> '<></>'


    //injecting the variables and using it!
    <>
    <Chai />
    <h2>Returning multiple elements</h2>
    <h3>Using fragment tag</h3>
    <h3>This name is by injecting variables: {userName}</h3>
    </>
  )
}

export default App
