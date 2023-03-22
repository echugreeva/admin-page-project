import express from "express";
import { getUsers, resetPass, resetStatus } from "../controllers/Users.js";
const userRouter = express.Router();


userRouter.get('/admin',getUsers);
userRouter.post('/reset', resetPass)
userRouter.post('/set-status', resetStatus)

export default userRouter