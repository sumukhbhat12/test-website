
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { ExcuseGenerator } from './pages/ExcuseGeneratorApp';
import { AgePredictor } from './pages/AgePredictorApp';
import { DogFactGenerator } from './pages/DogFactGeneratorApp';
import { ErrorPage } from './pages/ErrorPage';
import { Navbar } from './Navbar';

function App() {

  return (
    <div className="App">
        <Router>
          <Navbar />
          <Routes>
            <Route path='/' element={ <Home /> }/>
            <Route path='/excuse' element={ <ExcuseGenerator /> }/>
            <Route path='/age' element={ <AgePredictor />} />
            <Route path='/dog' element={ <DogFactGenerator /> }/>
            <Route path='*' element={ <ErrorPage /> }/>
          </Routes>
        </Router>
    </div>
  );
}
export default App;
