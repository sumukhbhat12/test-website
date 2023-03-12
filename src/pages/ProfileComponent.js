import { Routes, Route, useNavigate } from "react-router-dom";
import { ChangeProfile } from "./ChangeProfile";
import { useContext } from "react";
import { AppContext } from "../App";

export const Profile = () => {
    const navigate = useNavigate();
    const {username} = useContext(AppContext);
    return(
    <div>
        <h1>PROFILE</h1>
        <h2>User : {username}</h2>
        <button onClick={ () => { navigate('changeprofile') } }>Change Profile</button>
        <Routes>
            {/* <Route path='changeprofile' element={ <ChangeProfile setUsername = {props.setUsername} /> }></Route> */}
            <Route path='changeprofile' element={ <ChangeProfile /> }></Route>

        </Routes>
    </div>
    )
}