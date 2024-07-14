import jwt from 'jsonwebtoken'
import { User } from "../../../db/models/user.model.js";
import bcrypt from "bcrypt"

export const userSignUp=async(req,res,next)=>{
    try{
        const {name,email,password}= req.body;
       const userExistance=await User.findOne({email});
       if(userExistance){
           throw new('user already exist',{cause:409})
        } 
        const hashpassword=bcrypt.hashSync(password,8)
        const user=new User({
            name,
            email,
            password:hashpassword,
            
        })
        const createUser= await user.save()
        return res.status(201).json({message:"User created successfully",success:true,data:createUser})
    }catch (error){
      return res.status(error.cause||500).json({message:error.message,success:false})
    }
    }
export const userSignin=async(req,res,next)=>{
    try {
         const { email, password } = req.body;
            console.log('Sign in attempt with identifier:', identifier);
            // Find the user by email, recoveryEmail, or mobileNumber
            const user = await User.findOne({ email });
        
            if (!user) {
              return res.status(400).json({ error: 'User not found' });
            }
        
            // Validate password
            const isPasswordValid =  bcrypt.compareSync(password, user.password);
            if (!isPasswordValid) {
              return res.status(400).json({ error: 'Invalid password' });
            }
        
            await user.save();
          const accessToken=jwt.sign({userID:user._id},'hj4bh34h4')
            res.status(200).json({ message: 'Sign in successful', user ,accessToken});
          } catch (error) {
            console.error('Error during sign in:', error);
            res.status(500).json({ error: 'Internal server error' });
          }
    }