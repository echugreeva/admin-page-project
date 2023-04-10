import {Link,useLocation} from 'react-router-dom';
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';


const Nav = (props) => {
    const location = useLocation();
    if (location.pathname === '/admin' || location.pathname === '/user' ){
        return (
            <AppBar>
                <Toolbar>
                    <Button 
                    variant="contained" 
                    component={Link} to='/'
                    sx={{
                        mx:2,
                        color:'white'
                    }}
                    >
                        Logout
                    </Button>
                    <Button
                    variant="contained"
                    color='secondary'
                    component={Link} to='/admin'
                    >
                       Admin
                    </Button>                
                </Toolbar>
            </AppBar>
        )  
    } else {
        return (
            <AppBar>
                <Toolbar>
                    {/* <Typography>Please, login to proceed</Typography> */}
                </Toolbar>                
            </AppBar>
        )
    }
    
}

export default Nav