import express from "express";
import { getUsers, resetPass, resetStatus, getTodos,addTodos,updateTodos,deleteTodos, checkLogin} from "../controllers/Users.js";
const userRouter = express.Router();

userRouter.post('/login', checkLogin)
userRouter.get('/admin',getUsers);
userRouter.post('/reset', resetPass)
userRouter.post('/set-status', resetStatus)

userRouter.get('/todo/:uid', getTodos)
userRouter.post('/todo/:uid', addTodos)
userRouter.post('/todo-update', updateTodos)
userRouter.post('/todo-delete', deleteTodos)

export default userRouter