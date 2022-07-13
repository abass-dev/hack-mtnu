import './App.css';
import axios from 'axios'
import { useState } from 'react';

function App() {
  const [name, setName] = useState('')
  return (
    <div className="App">
     <input name='name' onChange={(e) => setName(e.target.value)}/>
    </div>
  );
  
  axios.post('http://localhost:5000/api', {
    firstName: name
  })
}

export default App;
