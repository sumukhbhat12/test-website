
// import './App.css';

// //import {users} from './Users.js';
// //import { GetUserComponent } from './GetUserComponent.js';
// //import { GetJobComponent } from './GetJobComponent';
// //import {planets} from './Planets.js';
// //import { GetPlanetComponent } from './GetPlanetComponent';

// function App() {

// const age = 17;
// var isGreen = false;
// isGreen = age>=18? true : false;
// const names = ["Zumukh","Zuresh","Ziddharth"];
// const ages = [23,21,20];
// const emails = ["sumukhbhat12@gmail.com","suresh@gmail.com","siddharth@gmail.com"];
// const [name,setName] = useState('Zumukh');
// let text="";
// const [age, setAge] = useState(0);
// const [textColor,setTextColor] = useState("black");
// const colors = ["red","green","yellow","pink","hotpink","purple","skyblue","blue","cyan","brown","grey","magenta"];
  

  // const incrementAge = ()=>{
  //  setAge(age+1);
  // }

  // const changeName = ()=>{
  //   setName(text);
  // }

  // const changeNameText = (event)=>{
  //   text = event.target.value;
  // }

  // const setRandomColor = () => {
  //   const rando = Math.floor(Math.random()*colors.length); 
  //   console.log(rando); 
  //   setTextColor(colors[rando % colors.length]);
  // }


  
//   return (
//     <div className="App">
// Manually displaying name age and email of 3 people using react components
//         {/* <GetUserComponent name="Zumukh" age={23} email="sumukhbhat12@gmail.com"/>
//         <GetJobComponent salary={150000} position="SDE 2" company="Zumukh Enterprises"/>
//         <GetUserComponent name="Zuresh" age={21} email="suresh@gmail.com"/>
//         <GetJobComponent salary={120000} position="SDE 1" company="Zumukh Enterprises"/>
//         <GetUserComponent name="Ziddharth" age={20} email="siddharth@gmail.com"/>
//         <GetJobComponent salary={100000} position="SDE 1" company="Zumukh Enterprises"/> */}

// Test
//         {/* <h1 className="name">
//             Zumukh
//         </h1> */}

// Testing conditional operator
//         {//age >= 18 ? <h2 style={{color:isGreen? "green" : "red"}}>Over Age</h2> : <h2 style={{color:isGreen? "green" : "red"}}>Under Age</h2>
//         }


// Displaying name age and email using react component and map function
//         {
//           // users.map((user,index)=>{
//           //   return(
//           //     <GetUserComponent name={user.name} age={user.age} email={user.email}/>
//           //   );
//           // })
//         }

// Displaying planet name only if it is a gaseous planet (check GetPlanetComponent.js)
//         {
//           // planets.map((planet,index)=>{
//           //   return(
//           //     <GetPlanetComponent name={planet.name} isGasPlanet={planet.isGasPlanet}/>
//           //   )
//           // })
//         }

// Testing states and useState hooks
            //{ <h1>{age}</h1>
        //<button onClick={incrementAge} >increment</button> }


//Changing the name from the user input after the click of a button
        //{ <input type="text" onChange={changeNameText}/> <button onClick={changeName}>change</button>
        //    <h1>Hello, My name is {name}</h1> }


//changing the text color randomly after the click of a button
        //{ <h1 style={{color:textColor}}>Hi, My name is Zumukh</h1>
        //<button onClick={setRandomColor}>change</button> }

//     </div>
//   );
// }

// export default App;
