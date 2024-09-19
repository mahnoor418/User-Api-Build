import express from 'express';
import { deleteUser, getUserById, getUsersData, postUserData, updateUser } from '../Controllers/user-controller.js';

const userRoute = express.Router();

userRoute.post("/createuser" , postUserData );
userRoute.get("/get", getUsersData);
userRoute.get("/get/:id", getUserById);
userRoute.delete("/delete/:id" , deleteUser)
userRoute.post("/update/:id" ,  updateUser);




export default userRoute