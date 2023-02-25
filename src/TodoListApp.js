//copy paste into App.js to run this application
/*
import './App.css';
import { useState } from "react";
import { GetTaskComponent } from './GetTaskComponent';

function App() {

  const [todoList, setTodoList] = useState([]);
  const [newTask, setNewTask] = useState("");

  const handleChange = (event) => {
      setNewTask(event.target.value);
  }

  const addTask = () => {
      //... is called spread operator
      //const numbersOne = [1, 2, 3];
      //const numbersTwo = [4, 5, 6];
      //const numbersCombined = [...numbersOne, ...numbersTwo];
      //output: [1,2,3,4,5,6]
      const task = {
        id: todoList.length === 0 ? 1 : todoList[todoList.length-1].id + 1 ,
        name: newTask,
        completed: false,
      }
      const newList = [...todoList,task];  
      setTodoList(newList);
  }

  const removeTask = (task) => {
      //one way
      //todoList.splice(todoList.indexOf(task),1);
      //setTodoList(todoList);

      //second way :- filter the array and remove all elements that are equal to the name
      //const arr = ["zumukh","ziddharth","zamarth"];
      //const newArr = arr.filter((name) => {
      //  return name === "ziddharth" ? false : true;
      //})

      const newList = todoList.filter((taskobj) => {
          return taskobj.id === task.id ? false : true;
      })

      setTodoList(newList);
  }

  const completeTask = (task) => {
      //setTodoList(todoList.map((taskObj)=>{return task.id === taskObj.id ? {...taskObj, completed:true} : taskObj}));
      const newList = todoList.map((taskObj)=>{
          return taskObj.id === task.id ? {...taskObj, completed: true} : taskObj;
      });
      setTodoList(newList);
  }

  return (
    <div className="App">
        <div className='addTask'>
          <input onChange={handleChange}/>
          <button onClick={addTask}>Add Task</button>
        </div>
        <div className='list' style={{height:'auto', width:'100%', display:'flex', alignItems:'center', paddingTop:'50px',flexDirection:'column'}}>
            {todoList.map((task,index)=>{
              return (
                <GetTaskComponent id={task.id} name={task.name} completed={task.completed} removeTask={removeTask} completeTask={completeTask}/>
              );
            })}
          
        </div>
    </div>
  );
}
export default App;
*/
