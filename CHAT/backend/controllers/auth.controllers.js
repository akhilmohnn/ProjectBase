import User from "../models/user.model.js";

export const signup= async(req,res) => {
    try{
        const {fullName,userName,password,confirmPassword,gender} = req.body;

        if(password!=confirmPassword){
            return res.status(400).json({error:"Passwords mismatch"})
        }

        const user= await User.findOne({userName})

        if(user){
            return res.status(400).json({error:"Username already exists"})
        }

    }

    catch(error){

    }
};

export const login= (req,res) =>{
    console.log("loginUser");
}

export const logout=(req,res) =>{
    console.log("logoutUser");
}
