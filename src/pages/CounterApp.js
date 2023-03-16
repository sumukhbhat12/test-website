import { IconButton } from 'rsuite';
import { Minus,Plus, Reload } from '@rsuite/icons';
import "rsuite/dist/rsuite.min.css";
import { useCounter } from '../Hooks/useCounter';

export const Counter = () => {
    const { state:count, increment, decrement, reset } = useCounter(0);

    return(
        <div>
            <h2>Counter</h2>
            <br />
            <IconButton icon={ <Minus /> } appearance='primary' circle size="xs"  onClick={ decrement }/> 
            <h2>{count}</h2>
            <IconButton icon={ <Plus /> } appearance='primary' circle size='xs' onClick={ increment }/>
            <br /><br />
            <IconButton icon={ <Reload /> } appearance='primary' circle size='xs' onClick={ reset }/>
        </div>
    )
}