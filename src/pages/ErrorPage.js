import { useLocation } from "react-router-dom";

export const ErrorPage = () => {
    const location = useLocation();
    return <h1>ERROR 404: Page Not Found! Path: {location.pathname} Does Not Exist!</h1>
}