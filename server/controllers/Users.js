import {Users,ToDo} from '../model/dbModels.js'

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
    // console.log(req.body)
    try {
        const updatedToDo = ToDo.update(
            {
                // description:req.body.description, 
                done:req.body.done
            },
            {
                where:
                    {
                        to_do_id: req.body.to_do_id
                       },
                
            }

        );
        console.log(updatedToDo)
        res.json({msg:'status updated'})
    
    }
    
    catch(e){
        console.log(e);
        res.status(404).json({msg:'update not successful'})
    }
}

export const deleteTodos = async(req,res)=> {
    console.log(req.body)
    console.log(req.data)
    try {
        const smth = 
        await ToDo.destroy(
            
            {
                where:
                    {
                        to_do_id: 3
                       }
                
            }

        );
        
        console.log(smth)
        res.json({msg:'removed'})
    
    }
    
    catch(e){
        console.log(e);
        res.status(404).json({msg:'update not successful'})
    }
}