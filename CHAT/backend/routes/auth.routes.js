import express from "express";
import {login,signup,logout} from "../controllers/auth.controllers.js"

const router=express.Router();

/* router.get("/login", (req,res)=>{
    res.send("Login Route");
}); can give fn like this but it becomes lengthy,so using controllers
*/

router.get("/signup",signup);

router.get("/login",login);

router.get("/logout",logout);



export default router;
