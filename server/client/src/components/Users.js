import {useState, useEffect} from 'react'
import UserCard from "./UserCard"

const Users = () => {

 const [users, setUsers] = useState([]);
 useEffect(()=>{
    fetch('http://localhost:3030/admin')
    .then(res=>{
        if(res.status == 200) {
            console.log(res)
            return res.json()
        }}
        )
    .then(data=>
        setUsers(data))
    .catch(e=>{console.log(e)})
},[])


    return(
        <div>
        {
                users ? users.map(item=>{
                    return (
                        <UserCard key={item.user_id} data={item}/>
                          
                    )
                }) : 'Unathorized'
            }
        </div>
    )
}

export default Users