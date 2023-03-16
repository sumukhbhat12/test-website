import { useState } from "react";

export const useCounter = (initialVal = 0) => {
    const [state, setState] = useState(initialVal);

    const increment = () => {
        setState(state+1);
    }

    const decrement = () => {
        setState(state > 0 ? state - 1 : 0);
    }

    const reset = () => {
        setState(initialVal);
    }

    return {state, increment, decrement, reset}
}