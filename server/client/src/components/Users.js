import {useState, useEffect} from 'react'
import UserCard from "./UserCard"
import Container from '@mui/material/Container';

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
        <Container
        sx={{
            mt:2,
            mx: 'auto',
            display: 'flex',
            flexDirection: 'row',
            flexWrap: 'wrap',
            alignItems: 'center',
            justifyContent: 'space-evenly',
            alignContent: 'space-around' 
        }}
        >
        {
                users ? users.map(item=>{
                    return (
                        <UserCard key={item.user_id} data={item}/>
                          
                    )
                }) : 'Unathorized'
            }
        </Container>
    )
}

export default Users