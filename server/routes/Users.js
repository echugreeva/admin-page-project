import express from "express";
import { getUsers, resetPass, resetStatus, getTodos,addTodos,updateTodos,deleteTodos} from "../controllers/Users.js";
const userRouter = express.Router();


userRouter.get('/admin',getUsers);
userRouter.post('/reset', resetPass)
userRouter.post('/set-status', resetStatus)

userRouter.get('/todo/:uid', getTodos)
userRouter.post('/todo/:uid', addTodos)
userRouter.post('/todo',updateTodos)
userRouter.delete('/todo',deleteTodos)

export default userRouter