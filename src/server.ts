import express from "express";
import { rateLimiter } from "./rateLimiter";
import { PORT } from "./constants";

const app = express();

// Using rate limit as middleware
app.use(rateLimiter);

app.get('/',(_,res)=>{
    res.send("You are with in limit...")
})
