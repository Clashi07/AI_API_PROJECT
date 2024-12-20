require('dotenv').config()
const cors=require('cors');
const express = require('express');
const {userRouter} = require('./router/userRouter');
const mongoose  = require('mongoose');
const {MONGO_URL}=require('./config');
const session = require('express-session-jwt')
const app=express();
app.use(cors())
app.use(express.json());
app.use('/app/v1/user',userRouter);
const PORT=8080;
async function main(){
    await mongoose.connect(MONGO_URL);
    console.log(`Your Database is connected!`)
    app.listen(PORT,()=>{
        console.log(`Your server is running on port ${PORT}`);
    });
}
main();
