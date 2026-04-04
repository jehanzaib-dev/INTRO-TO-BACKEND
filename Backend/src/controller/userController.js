import { UserModel } from "../models/userModel.js";

const registerUser=async (req,res) => {
    console.log("request hit");
    try {
        const {username, email, password}=req.body;
        if(!username || !email || !password){
            return res.status(400).json({message:"all fields are required"});
        }
        const alreadyPresent=await UserModel.findOne({email:email.toLowerCase()});
        if(alreadyPresent){
            return res.status(400).json({message:"user already exists"});
        }
        const user=await UserModel.create({
            username,
            email:email.toLowerCase(),
            password,
            loggedIn:false
        });
        res.status(201).json({message:"user created successfully", user:{id:user._id, email:user.email, username:user.username}});

    } catch (error) {
        res.status(500).json({message:"internal server error occured"});
    }    
};

export {
    registerUser
}
