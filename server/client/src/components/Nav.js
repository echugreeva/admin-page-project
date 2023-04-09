import {Link,useLocation} from 'react-router-dom';



const Nav = (props) => {
    const location = useLocation();
    if (location.pathname === '/admin' || location.pathname === '/user' ){
        return (
            <div>
                <Link to='/'>Logout</Link>
                {/* <Link to='/login'>Login</Link> */}
                <Link to='/admin'>Admin</Link>
            </div>
        )  
    } else {
        return (
            <div>
                <h1>Please, login to proceed</h1>
            </div>
        )
    }
    
}

export default Nav