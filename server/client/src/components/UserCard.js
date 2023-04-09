import axios from 'axios';
import {useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import { AppContext } from '../App';


const UserCard = ({data}) => {
    const navigate = useNavigate();
    console.log({data})
    const [user_id, setId]=useState(data.user_id)
    const [user_status, setStatus] = useState('')
    const {userProfileId, setProfile} = useContext(AppContext)
    // const [showUser, setShow]=useState(false)

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
        
        // const handleStatusChange = useCallback(async(user_status)=>{
            
        //         try {
        //             const response = axios.post('http://localhost:3030/set-status', {
        //             user_id, user_status
        //         },  {
        //                 withCredentials:true, 
        //                 headers:{
        //                     'Content-Type': 'application/json'
        //                 }
        //             })
        //             alert((await response).data.msg)
        //         }
                
        //         catch (e){
        //         console.log(e.response.data.msg)
        //         }
            
        // },[user_status])

    return (
        <>
        <div>{data.username}</div>
       
        <select value={user_status} onChange={(e)=>{
            setStatus(e.target.value)
            
            handleStatusChange(e.target.value)
        }}>
            <option value={data.status}>{data.status}</option>
            <option value='admin'>admin</option>
            <option value='viewer'>viewer</option>
            <option value='standard'>standard</option>
        </select>
        <button onClick={handleResetPass}>reset password</button>
                {/* <button onClick={()=>{setShow(!showUser)
                
            //  navigate('/user')    
            }
                
            }>{showUser?"close" : "more info"}</button>

        {
          showUser &&  <UserProfile user_id={user_id}/>
        } */}
        <button onClick={()=>{
            setProfile(data)
            navigate('/user')}}>edit user's todo</button>
        </>
    )
}

export default UserCard