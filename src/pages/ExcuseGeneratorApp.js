
import '../App.css';
import Axios from 'axios';
import { useState } from 'react';

//function App() {
export const ExcuseGenerator = () => {

  const [excuse,setExcuse] = useState("");

  const generateExcuse = (excuse) => {
      console.log(excuse);
      Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}`).then((response) => {
          setExcuse(response.data[0].excuse);
      })
  }

  return (
    <div className="App">
        <h1>Generate an Excuse</h1>
        <button style={{marginRight:'10px'}} onClick={() => generateExcuse('party')}>Party</button>
        <button style={{marginRight:'10px'}} onClick={() => generateExcuse('family')}>Family</button>
        <button style={{marginRight:'10px'}} onClick={() => generateExcuse('office')}>Office</button>
        <p>{excuse}</p>
    </div>
    
  );
}
//export default App;
