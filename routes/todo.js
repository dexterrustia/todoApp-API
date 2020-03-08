const express = require('express');
const routes = express.Router();
const Todo = require('../models/todo.model');

//Get All todos
routes.get('/', async (req, res) => {
    //const todos  = await Todo.find().watch()
    const todos  = await Todo.find().then(suc =>{
        res.json(suc)
    }).catch(err => {
        res.json(err)
    })
})

//Get todo by todoID
routes.get('/:uid', async (req,res) => {
    const todos = await Todo.find({ _id: req.params.uid }).then(suc => {
        res.json(suc)
    }).catch(err => {
        res.json(err)
    })

}) 

//Get todo by userID
routes.get('/user/:uid', async (req,res) => {
    const todos = await Todo.find({ userID: req.params.uid }).then(suc => {
        res.json(suc)
    }).catch(err => {
        res.json(err)
    })

}) 
//Save todo
routes.post('/', async (req,res) => {
    const todo = new Todo({
        userID : req.body.userID,
        title : req.body.title,
        description : req.body.description,
        level : req.body.level,
        status : req.body.status,
        dueDate : req.body.dueDate
    })

    const saveTodo = await todo.save().then(suc => {
        res.json(suc)
    }).catch(err => {
        res.json(err)
    })
    console.log(res)

})
routes.delete('/:id', async (req,res) => {
    const deleteTodo = await Todo.deleteOne({_id : req.params.id}).then(suc => {
        res.json(suc)
    }).catch(err => {
        res.json(err)
    })
})

routes.put('/:id', async (req,res) => {
    const updatedTodo = await Todo.update(
        {_id:req.params.id},
        { $set:{
            userID : req.body.userID,
            title : req.body.title,
            description : req.body.description,
            level : req.body.level,
            status : req.body.status,
            dueDate : req.body.dueDate
        }}
    )
    res.json(updatedTodo)
})

module.exports = routes;