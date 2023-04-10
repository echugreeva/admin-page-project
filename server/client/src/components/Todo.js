import {useState, useEffect,useContext, } from 'react'
import axios from 'axios';
import { AppContext } from '../App';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper'
import { TextField } from '@mui/material';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import InputBase from '@mui/material/InputBase';

const ToDo = () => {
    const {userProfileId, setProfile} = useContext(AppContext);
    const [todo, setTodo] = useState([]);
    const [userInput, setInput] = useState('');
    

    const fetchUserTodo = ()=>{
        fetch(`http://localhost:3030/todo/${userProfileId.user_id}`)
        .then(res=>{
            if(res.status == 200) {
                console.log(res)
                return res.json()
            }}
            )
        .then(data=>{
            console.log(data)
            setTodo(data)
        }
            
            )
        .catch(e=>{console.log(e)})
    }

    useEffect(()=>{
   fetchUserTodo()
},[])
    

const handleSubmit = async() => {
    const user_id=userProfileId.user_id
    try {
        const response = axios.post(`http://localhost:3030/todo/${userProfileId.user_id}`, {
        user_id, userInput
    },  {
            withCredentials:true, 
            headers:{
                'Content-Type': 'application/json'
            }
        })
        alert((await response).data.msg)
       fetchUserTodo()
    }
    
    catch (e){
    console.log(e.response.data.msg)
    }
    }

    const updateTodo = async(id, status) => {

        try {
            const response = axios.post('http://localhost:3030/todo-update', {
            id, status
        },  {
                withCredentials:true, 
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            alert((await response).data.msg)
            fetchUserTodo()
        }
        
        catch (e){
        console.log(e.response.data.msg)
        }
        }

    const deleteToDo = async(id) => {
        try {
            const response = axios.post('http://localhost:3030/todo-delete', {id
            
        },  {
                withCredentials:true, 
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            alert((await response).data.msg)
            fetchUserTodo()
        }
        
        catch (e){
        console.log(e.response.data.msg)
        }
        }

return (
    <Container
    sx={{
        mt: 12,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
        
    }}
    >

<Paper elevation={2}
        sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            my:5,
            px:12,
            py:3
        }}
        >
        
       
            <FormLabel sx={{
                mb:1
            }}>
            Add a new to do:
            </FormLabel>
            <TextField type="text" onChange={(e)=>{setInput(e.target.value)}} placeholder={userInput} value={userInput} />
            
            <Button 
            variant="contained"
            color='primary'
                sx={{
                    m:2,
                    width: '50%'
                }}

            onClick={()=>{
                handleSubmit()
                setInput('')
            }}>Add</Button>
        
        </Paper>
        <Container
        sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            
            
        }}
        >
            <Typography variant="h5">{userProfileId.username}'s to do</Typography>
        <Container
        sx={{
            mt: 2,
            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-start',
            
            
        }}
        >
        {
                    todo ? todo.map(item=>{
                        return (
                            <Card key={item.to_do_id}
                            sx={{
                                mt:2,
                                mx:1,
                                p:2
                            }}>
                                <CardActionArea>
                                    <CardContent sx={{textAlign:'left'}}>
                                        
                                        <Typography>Task: {item.description}</Typography>
                                        
                                        <Typography>Status: {item.done===false?"to do" : "done"}</Typography>
                                    </CardContent>
                                </CardActionArea>
                                <CardActions>

                                </CardActions>
                                <Button
                                variant="outlined"
                                color='primary'

                                sx={{
                                    mx:1
                                }}
                                onClick={()=>{
                                        updateTodo(item.to_do_id, !item.done)
                                        // fetchUserTodo()
                                        }}>{item.done===false?"mark as done" : "mark as to do"}
                                        
                                </Button>
                                
                                <Button 
                                variant="contained"
                                color='secondary'
                                onClick={()=>{
                                    deleteToDo(item.to_do_id)
                                    // fetchUserTodo()
                                }}>Remove</Button>
                                
                                
                                
                            </Card>
                            
                        )
                    }) : 'No to do yet'
                }
        </Container>

        </Container>
        
            
    
    </Container>
)

}

export default ToDo