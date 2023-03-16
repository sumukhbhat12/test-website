import { useQuery } from "@tanstack/react-query"
import Axios from "axios";

export const useGetDogImage = () => {
    const {data:dogImage, isLoading} = useQuery(["dogimage"], ()=>{
        return Axios.get("https://dog.ceo/api/breeds/image/random").then((res)=>res.data);
    })
    console.log(dogImage);

    return { dogImage, isLoading };
}