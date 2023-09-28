//Metodos 
// GET POST PATCH DELETE
const Post = require("../models/post");
const express = require('express');
const router = express.Router();

//POST
router.post('/', async (req, res) => {

    const newPost = new Post({
        title: req.body.title,
        description: req.body.description
    });
    try {
        const savedPost = await newPost.save();
        res.json(savedPost);
    } catch (error) {
        res.json({ message: error })
    }
})

//GET
router.get('/:postId', async (req, res) => {
    try {
        const post = await Post.findById(req.params.postId);
        res.json(post);
    } catch (error) {
        res.json({ message: error })
    }
})

//DELETE
router.delete('/:postId', async (req, res) => {
    try {
        const removedPost = await Post.deleteOne({ _id: req.params.postId });
        res.json(removedPost);
    } catch (error) {
        res.json({ message: error });
    }
});


//PATCH
router.patch('/:postId', async (req, res) => {
    try {
        const updatePost = await Post.updateOne(

            { _id: req.params.postId },
            { $set: { title: req.body.title, description: req.body.description } });
        res.json(updatePost);
    } catch (error) {
        res.json({ message: error });
    }

});

module.exports = router;