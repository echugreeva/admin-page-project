import {useState, useEffect,useContext} from 'react'
import axios from 'axios';
import { AppContext } from '../App';

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
    <>
    <h2>{userProfileId.username}'s to do</h2>
            {
                todo ? todo.map(item=>{
                    return (
                        <div key={item.to_do_id}>
                            <p>{item.description}</p>
                            <button onClick={()=>{
                                deleteToDo(item.to_do_id)
                                // fetchUserTodo()
                            }}>Remove</button>
                            <p>{item.done===false?"to do" : "done"}</p>
                            <button onClick={()=>{
                                updateTodo(item.to_do_id, !item.done)
                                // fetchUserTodo()
                                }}>mark as done</button>
                        </div>
                          
                    )
                }) : 'No to do yet'
            }
    <h2>Add new to do</h2>
        <form onSubmit={(e)=>{
            e.preventDefault()
            handleSubmit()
            setInput('')
        }}>
        <label>
          New to do:
          <input type="text" onChange={(e)=>{setInput(e.target.value)}} placeholder={userInput} value={userInput} />
        </label>
        <input type="submit" value="Add" />
      </form>
    </>
)

}

export default ToDo