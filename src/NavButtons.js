import { useNavigate } from "react-router-dom";

export const NavButtons = () => {
    const navigate = useNavigate();
    return(
        <div>
            <button style={{marginRight:'10px', marginBottom:'20px', marginTop:'20px'}} onClick={() => {navigate('/excuse')}}>Excuse Generator</button>
            <button style={{marginRight:'10px', marginBottom:'20px', marginTop:'20px'}} onClick={() => {navigate('/age')}}>Age Predictor</button>
            <button style={{marginRight:'10px', marginBottom:'20px', marginTop:'20px'}} onClick={() => {navigate('/dog')}}>Dog Fact Generator</button>
          </div>
    );
}