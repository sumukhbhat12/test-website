import { useState,useEffect } from "react";

export const GetTextComponent = () => {
    const [text, setText] = useState("");

    //array at the end contains the variables for which if there is a state update
    //then the content inside useEffect hook needs to be executed
    //if it is empty, then the conents are executed only once during mounting time
    //if array is removed, then the contents are executed for every state update for all the variables
    useEffect(() => {
        console.log("Component Mounted!");

        return () => {
            console.log("Component Unmounted!");
        }
      }, []);   

    return(
        <div>
            <input onChange={(event)=>{setText(event.target.value)}} />
            <h1>{text}</h1>
        </div>
    )
}