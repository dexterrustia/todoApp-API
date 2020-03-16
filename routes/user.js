const express = require('express');
const routes = express.Router();
const User = require('../models/user.model')

routes.post('/', async (req,res) => {
    const user = new User({
        userName: req.body.userName,
        password: req.body.password
    })
 
    const saveUser = await user.save().then(suc =>{
        res.status(200).json({
            message : "User successfully save!",
            body : suc
        })
    }).catch(err => {
        res.status(501).json({
            message : "there is an error saving your account!",
            body : err
        })
        console.log(err)
    }) 

})

routes.get('/', async (req,res) => {
    const user = await User.find().then(suc => {
        res.json(suc)
    }).catch(err => {
        res.json(err)
    }) 
})

routes.put('/:id', async (req,res) => {
    const user = await User.update(
        {_id: req.params.id},
        { $set:{
            userName: req.body.userName,
            password: req.body.password
        } }
    ).then(suc =>{
        res.message = "User is successfully updated!"
        res.body = suc
    }).catch(err => {
        res.body = err
    })
})

module.exports = routes;