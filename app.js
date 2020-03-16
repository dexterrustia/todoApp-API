const express = require('express');
const mongodb = require('mongoose');
const bodyParser = require('body-parser')
const app = express(); 
const cors = require('cors')
require('dotenv/config');

app.use(bodyParser.json());

app.use(cors())
 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });


//ROUTES 
const postRouter = require('./routes/post')  
const todoRouter = require('./routes/todo') 
const userRouter = require('./routes/user')
//user meddleware ::.use
app.use('/post',postRouter);
app.use('/todo',todoRouter);
app.use('/user',userRouter)

app.get('/',(req,res) => {
    res.send('Hellow word!')
})


const port = process.env.port || 3000  //STEP 1 => echeck if in production use available in heroku else if developement use 8080
//tell node to listen to port 3000
app.listen(port,console.log(`Were listening to port ${port}`)); //development stage only


//DB CONNECTION
//mongodb+srv://testboy1:<password>@cluster0-ryi9b.mongodb.net/test
//STEP 2 => check if production use available URI else use env.DB_CONNECTION
mongodb.connect(process.env.MONGGODB_URI || process.env.DB_CONNECTION,(res)=>{
    console.log('We are now connected!'+res)
})  
