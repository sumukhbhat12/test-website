import { useNavigate } from "react-router-dom";
import 'rsuite/dist/rsuite.min.css'

export const NavButtons = () => {
    const navigate = useNavigate();
    return(
        <div>
            <button style={{marginRight:'10px', marginBottom:'20px', marginTop:'20px'}} onClick={() => {navigate('/excuse')}}>Excuse Generator</button>
            <button style={{marginRight:'10px', marginBottom:'20px', marginTop:'20px'}} onClick={() => {navigate('/age')}}>Age Predictor</button>
            <button style={{marginRight:'10px', marginBottom:'20px', marginTop:'20px'}} onClick={() => {navigate('/dog')}}>Dog Fact Generator</button>
            <button style={{marginRight:'10px', marginBottom:'20px', marginTop:'20px'}} onClick={() => {navigate('/joke')}}>Joke</button>
            <button style={{marginRight:'10px', marginBottom:'20px', marginTop:'20px'}} onClick={() => {navigate('/country')}}>Predict Country</button>
            <button style={{marginRight:'10px', marginBottom:'20px', marginTop:'20px'}} onClick={() => {navigate('/todo')}}>To Do List</button>
            <button style={{marginRight:'10px', marginBottom:'20px', marginTop:'20px'}} onClick={() => {navigate('/dogimage')}}>Dog Images</button>
            <button style={{marginRight:'10px', marginBottom:'20px', marginTop:'20px'}} onClick={() => {navigate('/counter')}}>Counter</button>


          </div>
    );
}