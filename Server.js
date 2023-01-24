const express=require('express')
const cors =require('cors')
const mongoose =require('mongoose')
require('dotenv').config()


const app=express()
const port= 9090;

app.use(cors());
app.use(express.json());

const uri ="mongodb+srv://team:team@test.cuuqfjn.mongodb.net/test";

mongoose.set('strictQuery', false);
mongoose.connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
 }).then( ()=>{console.log("conneted to DB")});

 
 const dataRouter=require('./routes/data');
 
 app.use('/data',dataRouter);

app.listen(port,()=>{

    console.log(`server is running on port : ${port}`);

});