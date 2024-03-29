import { QueryTypes } from 'sequelize';
import {Users} from '../model/dbModels.js'
import { ToDo } from '../model/ToDo.js';


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

export const checkLogin = async (req,res)=>{
    //add also that user is admin
    try {
        const user = await Users.findAll({
            where: {
                username:req.body.username.toLowerCase(),
                password:req.body.password
            }
        });
        if (user){
            res.json({msg: `success`})
        }



        

        
    }
    catch(e){
        console.log(e);
        res.status(404).json({msg:'username or password are incorrect'})
    }
}

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

        res.json({msg:'password reset successful'})
    
    }
    
    catch(e){
        console.log(e);
        res.status(404).json({msg:'update not successful'})
    }
}

export const resetStatus = async(req,res)=> {
    // console.log(req.body)
    try {
        const user = Users.update(
            {
                status:req.body.user_status
            },
            {
                where:
                    {
                        user_id: req.body.user_id
                       },
                
            }

        );
        console.log(user)
        res.json({msg:'status updated'})
    
    }
    
    catch(e){
        console.log(e);
        res.status(404).json({msg:'update not successful'})
    }
}


export const getTodos  = async(req,res)=> {
    console.log(req.params.uid)
    
    try {
        const todos = await ToDo.findAll(
            {
                where:
                    {
                        user_id: Number(req.params.uid)
                       },
                
            }
            // {
            //     attributes:['to_do_id', 'description', 'done', 'user_id']
            // }
            
        );
        // console.log(todos)    
        res.json(todos)

        
    }
    catch(e){
        console.log(e);
        res.status(404).json({msg:'not found'})
    }
}

export const addTodos =  async(req,res)=>{
        try {
            await ToDo.create({
                description:req.body.userInput,
                user_id: req.params.uid,
                
            })
            res.json({msg:'added'})
        }
        catch(e){
            console.log(e);
            // res.status(404).json({msg:'email not found'})
        }
    }

export const updateTodos = async(req,res)=> {
    // console.log('received update req on to do status')
    try {
        const smth = await ToDo.update(
            {
                done:req.body.status
            },
            {
                where:
                    {
                        to_do_id: req.body.id
                       },
                
            }

        );
        // console.log(smth)
        res.json({msg:'status updated'})
    
    }
    
    catch(e){
        console.log(e);
        res.status(404).json({msg:'update not successful'})
    }
} 

// export const delToDo = async (req,res) => {
//     console.log(req.body.id)

//     try {
//         await ToDo.query(`DELETE * FROM ad_todo WHERE to_do_id = ${req.body.id}`, {
//             type: QueryTypes.DELETE
//         })
//         res.json({msg:'removed'})
//     }
//     catch (e){
//         console.log(e);
//         res.status(404).json({msg:'update not successful'})
//     }
// }

export const deleteTodos = async(req,res)=> {
    console.log(req.body)
    console.log(req.data)
    try {
        const smth = 
        await ToDo.destroy(
            
            {
                where:
                    {
                        to_do_id: req.body.id
                       }
                
            }

        );
        
        // console.log(smth)
        res.json({msg:'removed'})
    
    }
    
    catch(e){
        console.log(e);
        res.status(404).json({msg:'update not successful'})
    }
}