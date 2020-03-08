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
//user meddleware ::.use
app.use('/post',postRouter);
app.use('/todo',todoRouter);

app.get('/',(req,res) => {
    res.send('Hellow word!')
})





//DB CONNECTION
//mongodb+srv://testboy1:<password>@cluster0-ryi9b.mongodb.net/test
mongodb.connect(process.env.DB_CONNECTION,(res)=>{
    console.log('We are now connected!'+res)
}) 


//tell node to listen to port 3000
app.listen('3000'); //development stage only
//const port = process.env.port || 8080 