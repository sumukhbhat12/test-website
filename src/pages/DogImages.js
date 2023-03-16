import { useGetDogImage } from "../Hooks/useGetDogImage"


export const DogImage = () => {

    const {dogImage,isLoading} = useGetDogImage();
    if (isLoading)
        return <h3>Loading...</h3>
    else
        return(
            <div>
                <h1>{dogImage?.message.split("/")[4]}</h1>
                <img src={dogImage?.message} alt='dog' />
            </div>
        )

}