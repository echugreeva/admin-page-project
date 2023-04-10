import {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import axios from 'axios'
import Button from '@mui/material/Button'; 
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper'
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';


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
        <Paper elevation={1}
        sx={{
            width: '45%',
            mt: 12,
            mx:'auto',
            p:2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
        }}
        >
           
                <Typography variant="h3">Please, login to proceed</Typography>
                <TextField type='text' placeholder='username' onChange={(e)=>{setUser(e.target.value)}}
                sx={{
                    m:2
                }}
                />
                <TextField type='password' placeholder='password' onChange={(e)=>{setPassword(e.target.value)}} />
                <Button 
                variant="contained"
                color="primary"
                onClick={handleLogin}
                sx={{
                    m:2,
                    width: '25%'
                }}
                >login</Button>
       

            
        </Paper>
    )
}

export default Login