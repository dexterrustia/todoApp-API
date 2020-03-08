const express = require('express');
const routes = express.Router();
const Post = require('../models/post.model')

routes.get('/', async (req,res) => { 
    const posts = await Post.find().then(suc =>{
        res.json(suc)
    }).catch(err => {
        res.json(err)
    })
})
routes.get('/:id', async (req,res) =>{
    console.log(req.params.id)
    const post = await Post.findById(req.params.id).then(suc =>{
        res.json(suc)
    }).catch(err => {
        res.json(err)
    })
} )


routes.post('/', async (req,res) => {
    //console.log(req.body); 
    const post = new Post({
        title : req.body.title,
        description : req.body.description
    }); 

    const savePast = await post.save().then(suc =>{
        res.json(suc)
    }).catch(err => {
        res.json(err)
    })
    console.log(res) 
})

routes.delete('/:id', async (req,res) => {
    const del = await Post.deleteOne({_id : req.params.id}).then(suc => {
        res.json(suc)
    }).catch(err => {
        res.json(err)
    })
})
routes.put('/:id', async (req,res) => {
    const updatedPost = await Post.update(
        {_id:req.params.id},
        { $set:{
            title: req.body.title,
            description: req.body.description
        }}
    )
    res.json(updatedPost)
})

// routes.get('/delete',(req,res) => {
//     res.send('Deleting post!')
// })

module.exports = routes;

