// import { useParams } from "react-router-dom"
import { useContext } from "react";
import { AppContext } from "../App";
export const Home = () => {
    // let {name} = useParams();
    const {username} = useContext(AppContext);
    return <h1>Welcome to Homepage! {username}</h1>
}