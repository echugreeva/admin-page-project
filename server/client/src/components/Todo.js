import {useState, useEffect} from 'react'
import axios from 'axios';

const ToDo = ({user_id}) => {
    const [todo, setTodo] = useState([]);
    const [userInput, setInput] = useState('');

    useEffect(()=>{
    fetch(`http://localhost:3030/todo/${user_id}`)
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
},[])

const handleSubmit = async() => {
    try {
        const response = axios.post(`http://localhost:3030/todo/${user_id}`, {
        user_id, userInput
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

    const deleteToDo = async(id) => {
        try {
            const response = axios.post(`http://localhost:3030/todo/delete`, {data:{ id:id}
            
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
    <>
    <h2>User's to do</h2>
            {
                todo ? todo.map(item=>{
                    return (
                        <div key={item.to_do_id}>
                            <p>{item.description}</p>
                            <button onClick={()=>{deleteToDo(item.to_do_id)}}>Remove</button>
                            <button >Edit</button>
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
          <input type="text" onChange={(e)=>{setInput(e.target.value)}} placeholder={userInput} />
        </label>
        <input type="submit" value="Add" />
      </form>
    </>
)

}

export default ToDo