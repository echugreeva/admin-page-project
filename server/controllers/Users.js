import {Users} from '../model/dbModels.js'

// export const addUsers = async(req,res)=>{
//     try {
//         await Users.create({
//             username:'userA',
//             password:123456,
//             status: 'admin'
//         })
//         res.json({msg:'added'})
//     }
//     catch(e){
//         console.log(e);
//         // res.status(404).json({msg:'email not found'})
//     }
// }

export const getUsers  = async(req,res)=> {
    
    try {
        const users = await Users.findAll(
            {
                attributes:['user_id', 'username', 'status']
            }
        );
        console.log(users)    
        res.json(users)

        
    }
    catch(e){
        console.log(e);
        res.status(404).json({msg:'not found'})
    }
}

export const resetPass = async(req,res)=> {
    
    try {
        const user = Users.update(
            {
                password:'654321'
            },
            {
                where:
                    {
                        user_id: req.body.user_id
                       },
                
            }

        );

        res.json(user)
    
    }
    
    catch(e){
        console.log(e);
        res.status(404).json({msg:'update not successful'})
    }
}

export const resetStatus = async(req,res)=> {
    
    try {
        const user = Users.update(
            {
                status:req.body.status
            },
            {
                where:
                    {
                        user_id: req.body.user_id
                       },
                
            }

        );

        res.json(user)
    
    }
    
    catch(e){
        console.log(e);
        res.status(404).json({msg:'update not successful'})
    }
}