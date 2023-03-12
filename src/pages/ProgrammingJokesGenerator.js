import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
export const ProgrammingJokes = () => {
    const {data:joke, isLoading, refetch} = useQuery(["joke"], () => {
        return Axios.get("https://official-joke-api.appspot.com/random_joke").then((res) => res.data);
    });
    console.log(joke);
    if (isLoading)
            return <h3>loading...</h3>
    else
        return(
            <div>
                <h1>Joke Generator</h1>
                <button onClick={ refetch }>New</button>
                <h2>{joke?.setup}</h2>
                <h3>{joke?.punchline}</h3>
            </div>
        )
}

