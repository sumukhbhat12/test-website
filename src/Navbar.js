import {Link} from 'react-router-dom';
export const Navbar = () => {
    return  (<div>
                <Link to='/' style={{paddingRight:'20px'}}>home</Link>
                <Link to='/excuse' style={{paddingRight:'20px'}}>excuse</Link>
                <Link to='/age' style={{paddingRight:'20px'}}>age</Link>
                <Link to='/dog' style={{paddingRight:'20px'}}>dog</Link>
            </div>);
}