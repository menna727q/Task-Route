import { Router } from "express";
import * as uc from "../user/user.controller.js"
const userRouter=Router()

userRouter.post('/signup',uc.userSignUp)
userRouter.post('/signin',uc.userSignin)