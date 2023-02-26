
import './App.css';
import Axios from 'axios';
import { useState } from 'react';

function App() {

  const [ageObj, setAgeObj] = useState(null);
  const [name, setName] = useState("");

  const getAge = () => {
      console.log(name);
      //backquote to specify url can be used to write variables directly using ${}
      Axios.get(`https://api.agify.io/?name=${name}`).then((response) => {
        console.log(response.data);
        setAgeObj(response.data);
      })
  }

  return (
    <div className="App">
        <input placeholder='Enter your Name' onChange={(event) => { setName(event.target.value);}} />
        <button onClick={getAge}>Predict Age</button>
        <h2>Predicted Age of {ageObj?.name} : {ageObj?.age}</h2>
    </div>
    
  );
}
export default App;
