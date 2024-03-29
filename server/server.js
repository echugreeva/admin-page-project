import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import db from './config/db.js';
// import {addUsers} from './controllers/Users.js'
// import {Users} from './model/dbModels.js'
import userRouter from './routes/Users.js';
import path from 'path';
dotenv.config();
const app = express();
const __dirname = path.resolve();


app.use(cors({credentials:true, origin:'http://localhost:3000'}));
app.use(cookieParser());

app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(userRouter);

app.listen(process.env.PORT||8080,()=>{
    console.log(`runon ${process.env.PORT||8080}`)
})


try {
    await db.authenticate();
    console.log('db connected')
}
catch (e){
    console.log(e)
}

// await Users.create({
//     username:'userA',
//     password:123456,
//     status: 'admin'
// })

// let user = await Users.findAll(
//     {
//        where: {
//         user_id: 2
//        }
//     }
// );

// console.log(user)
// await user.update({password:'654321'})
// await user.save()

// await Users.update(
//     {
//         password:'654321'
//     },
//     {
//         where:
//             {
//                 user_id: 2
//                },
        
//     }

// )