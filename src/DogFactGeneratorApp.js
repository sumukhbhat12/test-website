//Copy and paste in App.js to run this application
// import './App.css';
// import Axios from 'axios';
// import { useState, useEffect } from 'react';

// function App() {

//   const [dogFact, setDogFact] = useState("");

//   //one way to fetch api data
//   //fetch('https://dogapi.dog/api/facts').then((response) => response.json()).then((data) => {
//   //console.log(data);
//   //});

//   //Everytime Generate Dog Fact button is clicked, api request is sent and the data is fetched and displayed
//   const generateDogFact = () => {
//     // another way to fetch api data
//     Axios.get('https://dogapi.dog/api/facts').then((res) => {
//       console.log(res.data.facts[0]);
//       setDogFact(res.data.facts[0]);
//     });
//   }

//   //When a new page is loaded or page is refreshed, api request is sent and the data is fetched and displayed
//   useEffect(()=>{
//     generateDogFact();
//   },[]);

//   return (
//     <div className="App">
//         <button onClick={generateDogFact}>Generate Dog Fact</button>
//         <p>{dogFact}</p>
//     </div>
    
//   );
// }
// export default App;
