import {Users} from '../model/dbModels.js'

export const addUsers = async(req,res)=>{
    try {
        await Users.create({
            username:'userA',
            password:123456,
            status: 'admin'
        })
        res.json({msg:'added'})
    }
    catch(e){
        console.log(e);
        // res.status(404).json({msg:'email not found'})
    }
}

export const getUsers  = async(req,res)=> {
    
    try {
        const users = await Users.findAll(
            {
                attributes:['username', 'status']
            }
        );

        res.json(users)

        
    }
    catch(e){
        console.log(e);
        res.status(404).json({msg:'not found'})
    }
}