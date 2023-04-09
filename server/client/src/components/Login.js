import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button'; 
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

const Login = (props) => {
    const [username, setUser] = useState('');
    const [password, setPassword] = useState('');
    const [msg, setMsg]= useState('');

    const navigate = useNavigate();
    const handleLogin = async()=> {
        try{
            const response = await axios.post('http://localhost:3030/login', {
                username, password
            }, {
                withCredentials:true, 
                headers:{
                    'Content-Type': 'application/json'
                }
            });
            
            if(response.status==200){
                
                setMsg('');
                navigate('/admin');
            }
            
        }catch (e){
            setMsg(e.response.data.msg)
        }
    }
    

    return (
        <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            space: 2
        }}
        >
           

                <TextField type='text' placeholder='username' onChange={(e)=>{setUser(e.target.value)}}/>
                <TextField type='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} />
                <Button fullWidth onClick={handleLogin}>login</Button>
       

            
        </Box>
    )
}

export default Login