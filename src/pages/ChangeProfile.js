import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { AppContext } from '../App';

export const ChangeProfile = () => {
    const [newUsername,setNewUsername] = useState();
    const navigate = useNavigate();
    const {setUsername} = useContext(AppContext);
    return(
        <div style={{marginTop:'20px'}}>
            <input type="text" placeholder='Enter the new Username' onChange={ (event) => {setNewUsername(event.target.value)}}/>
            <button onClick={() => {setUsername(newUsername)}}>change</button>
            <button onClick={() => {navigate(-1)}}>back</button>
        </div>
        
    )
}