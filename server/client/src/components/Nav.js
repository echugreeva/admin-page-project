import {Link} from 'react-router-dom';

const Nav = (props) => {
    return (
        <div>
            <Link to='/'>Home</Link>
            <Link to='/login'>Login</Link>
            <Link to='/admin'>Admin</Link>
        </div>
    )
}

export default Nav