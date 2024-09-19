
import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import dotenv from "dotenv";    
import { connectDB } from "./config/db.js";
import userRoute from "../APIS/Routes/user-routes.js";




dotenv.config();

const app = express();

app.use(cors())

app.use(express.json())

app.use(bodyParser.urlencoded({ extended : true}))
app.use(bodyParser.json());

app.use("/" , userRoute);
const port = process.env.PORT || 5000
connectDB()
app.listen( port , () => {
    console.log("Express server started");
})