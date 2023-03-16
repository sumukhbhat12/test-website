
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ExcuseGenerator } from './pages/ExcuseGeneratorApp';
import { AgePredictor } from './pages/AgePredictorApp';
import { DogFactGenerator } from './pages/DogFactGeneratorApp';
import { ErrorPage } from './pages/ErrorPage';
import { Navbar } from './Navbar';
import { NavButtons } from './NavButtons';
import { Profile } from './pages/ProfileComponent';
import { useState, createContext } from 'react';
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ProgrammingJokes } from './pages/ProgrammingJokesGenerator';
import { CountryPredict } from './pages/CountryPredictor';
import { FormComponent } from './pages/FormComponent';
import { Toggle } from './pages/ToggleComponent';
import { ToDoList } from './pages/TodoListApp';
import { DogImage } from './pages/DogImages';
import { Counter } from './pages/CounterApp';

export const AppContext = createContext();

function App() {
  const [username, setUsername] = useState("Sumukh");
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
      {/* AppContext here is used to avoid prop drilling ( nesting of props ), AppContext acts like a global repository of prop values*/}
        <AppContext.Provider value={{username, setUsername}}>
          <Router>
            <Navbar />
            <NavButtons />
            <Routes>
              {/* {<Route path='/' element={ <Home username={username} /> }/>} --> Without AppContext, we need to provide props*/}
              <Route path='/' element={ <Home /> }/>
              <Route path='/todo' element= { <ToDoList /> } />
              {/* <Route path='/:name' element={ <Home /> }/> */}
              <Route path='/excuse' element={ <ExcuseGenerator /> }/>
              <Route path='/age' element={ <AgePredictor /> } />
              <Route path='/dog' element={ <DogFactGenerator /> }/>
              {/* {<Route path='/profile/*' element={ < Profile username={username} setUsername={setUsername} /> } />} */}
              <Route path='/profile/*' element={ <Profile /> } />
              <Route path='/joke' element={ <ProgrammingJokes /> } />
              <Route path='/country' element={ <CountryPredict /> } />
              <Route path='/form' element={ <FormComponent /> } />
              <Route path='/custom' element={ <Toggle /> } />
              <Route path='/dogimage' element={ <DogImage /> } />
              <Route path='/counter' element={ <Counter /> } />
              <Route path='*' element={ <ErrorPage /> }/>
            </Routes>
          </Router>
        </AppContext.Provider>
      </QueryClientProvider>

    </div>
  );
}
export default App;
