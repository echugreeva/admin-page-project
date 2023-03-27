import axios from 'axios';
import {useState, useEffect, useCallback} from 'react'
// import {useNavigate} from 'react-router-dom'
import UserProfile from './UserProfile';


const UserCard = ({data}) => {
    console.log({data})
    const [user_id, setId]=useState(data.user_id)
    const [user_status, setStatus] = useState('')
    const [showUser, setShow]=useState(false)

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
                <button onClick={()=>{setShow(!showUser)}}>{showUser?"close" : "more info"}</button>
                <button onClick={handleResetPass}>reset password</button>
        {
          showUser &&  <UserProfile user_id={user_id}/>
        }
        </>
    )
}

export default UserCard