import {useState, useEffect} from 'react'
import ToDo from './Todo'
const UserProfile = ({user_id}) => {
    // useEffect(()=>{

    // },[])
    return (
        <div>
            <p>UserProfile</p>
            <ToDo user_id={user_id}/>
            <div>contact</div>
        </div>
    )
}

export default UserProfile