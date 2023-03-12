import { useQuery } from "@tanstack/react-query"
import Axios from "axios";
import { useState } from "react";

export const CountryPredict = () => {
    const [name, setName] = useState("");
    const [fullname, setFullName] = useState("");
    const {data:predict, refetch} = useQuery(["predictcountry"], () => {
        return Axios.get(`https://api.nationalize.io/?name=${fullname}`).then((res) => res.data);
    }, {
        refetchOnWindowFocus:false,
        enabled:false,
    });

    const getData = () => {
        console.log(name);
        setFullName(name);
        refetch();
        console.log(predict);
    }
    return(
        //Double click on Predict button to get the result.
        //react query is displaying the stale data despite fetching the latest one from the api
        <div>
            <input type = 'text' onChange={ (event) => setName(event.target.value) } placeholder='Enter the Name'/>
            <button onClick={() => getData()}>Predict</button>
            <h2>Country : {predict?.country[0]?.country_id}</h2>
        </div>
    )
}