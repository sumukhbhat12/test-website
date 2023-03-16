import { useToggle } from "../Hooks/useToggle"


export const Toggle = () => {
    //custom hook
    const [isVisible, toggle] = useToggle();
    return(
        <div>
            <button onClick={ toggle }>{ isVisible? "Hide" : "Show" }</button>
            { isVisible && <h3>Hidden text</h3> }
        </div>
    )
}