import "./App.css";
import Card from "./components/Card";

function App() {

  //hum direct component kae andar 'object' ya 'array' nahi likh sakte hain but 
  //usae as an variable pass kar sakte hain.
  const myObj = {
    username: "hitesh",
    age: 22
  }

  const myArr = [1 , 2 , 3];
  //you can pass above "obj" and "arr" jaise hum component maein variable pass karte hain.

  return (
    <>
      <h1 className="bg-green-400 text-black p-4 rounded-xl mb-4">Tailwind Test</h1>
      <Card username="chaiaurcode" btnText="Click Me"/> 
      <Card username="prakhar"/>
    </>
  );
}

export default App;
