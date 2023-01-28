
import axios from 'axios';
import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [data, setdata] = useState([])
  useEffect(() => {
    getuser()
  }, [])

  const getuser = async () => {
    const data = await axios.get(`https://mongo-3ihm.onrender.com/api`)
    console.log(data.data);
    setdata(data.data)
  }
  return (
    <div className="App">
      hello
      {data.map((val) => {
        return (
          <h1>{val.text}</h1>
        )
      })}
    </div>
  );
}

export default App;
