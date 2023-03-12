import {Link} from 'react-router-dom';
export const Navbar = () => {
    return  (<div>
                <Link to='/' style={{paddingRight:'20px'}}>home</Link>
                <Link to='/profile' style={{paddingRight:'20px'}}>profile</Link>
            </div>);
}