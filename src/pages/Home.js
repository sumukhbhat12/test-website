import { useParams } from "react-router-dom"

export const Home = () => {
    let {name} = useParams();
    return <h1>Welcome to Homepage! {name}</h1>
}