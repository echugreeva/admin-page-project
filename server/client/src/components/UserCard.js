import axios from 'axios';
import {useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../App';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem'


const UserCard = ({data}) => {
    const navigate = useNavigate();
    console.log({data})
    const [user_id, setId]=useState(data.user_id)
    const [user_status, setStatus] = useState(data.status)
    const {userProfileId, setProfile} = useContext(AppContext)
    // const [showUser, setShow]=useState(false)
    //useEffect = (()=>{},[user_status])  to reload status once we change it, callback> ref?
    const handleResetPass = async() => {
        try {
            const response = axios.post('http://localhost:3030/reset', {
            user_id, user_status
        },  {
                withCredentials:true, 
                headers:{
                    'Content-Type': 'application/json'
                }
            })
            alert((await response).data.msg)
        }
        
        catch (e){
        console.log(e.response.data.msg)
        }
        }

        const handleStatusChange = async(user_status) => {
           
            try {
                const response = axios.post('http://localhost:3030/set-status', {
                user_id, user_status
            },  {
                    withCredentials:true, 
                    headers:{
                        'Content-Type': 'application/json'
                    }
                })
                alert((await response).data.msg)
            }
            
            catch (e){
            console.log(e.response.data.msg)
            }
            }
        
    return (
        <Card sx={{
            mt:2
        }}>
            <CardActionArea>
                <CardMedia
                component="img"
                alt="User profile img"
                // className={classes.media}
                
                image="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSBVtrw01AM9oJidFPKQbmigHhqll_3ScuACg&usqp=CAU"
                title="User profile img"
                sx={{
                    height:"auto",
                    width:'50%',
                    mx: 'auto',
                    objectFit: 'cover'
                }}
                
                >
                    
                </CardMedia>
                <CardContent>
                    <Typography variant="h5">{data.username}</Typography>
                    <Typography variant="h6"> Access level:</Typography>
                    <Select value={user_status} onChange={(e)=>{
                        setStatus(e.target.value)
                        
                        handleStatusChange(e.target.value)
                    }}>
                        <MenuItem value={user_status}>{user_status}</MenuItem>
                        <MenuItem value='admin'>admin</MenuItem>
                        <MenuItem value='viewer'>viewer</MenuItem>
                        <MenuItem value='standard'>standard</MenuItem>
                    </Select>
                </CardContent>
            </CardActionArea>
            <CardActions>
            
                <Button 
                variant="contained"
                color='secondary'
                onClick={handleResetPass}>reset password</Button>
                {/* <button onClick={()=>{setShow(!showUser)
                
            //  navigate('/user')    
            }
                
            }>{showUser?"close" : "more info"}</button>

        {
          showUser &&  <UserProfile user_id={user_id}/>
        } */}
                <Button 
                variant="contained"
                color='primary'
                onClick={()=>{
                    setProfile(data)
                    navigate('/user')}}>edit user's todo
                </Button>
            </CardActions>
        
       
        
        
        </Card>
    )
}

export default UserCard