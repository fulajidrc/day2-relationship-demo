const model = require('../models');
const Post = model.Post;
const controller = {}

controller.create = async(req, res) => {
    try{
        const {title, categotyId, description, } = req.body;
        const {id} = req.user;
        const postData = {
            title,
            categotyId,
            description,
            userId: id
        }
        const post = await Post.create(postData);
        return post 
        ? res.status(201).json({message: 'Post added successfully!', data: post})
        : res.status(400).json({message: 'Post not added!'})
    }catch(error){
        return res.status(500).json({message: 'Server Error'});
    }
}

controller.getAll = async (req, res) => {
    try{
        const {id} = req.user;
        const posts = await Post.findAll({
            where:{userId: id},
            include: [
                model.Admin,
                model.Category
            ]
        }); 
        return res.status(200).json({message: 'Post\'s list', data: posts && posts.length > 0 ? posts : []})
    }catch(error){
        console.log(error.message);
        return res.status(500).json({message: 'Server error!'});
    }
}

controller.update = async (req, res) => {
    try{
        const { title, description, categotyId } = req.body;
        const {id} = req.params;
        const postUpdate = {
            title, 
            description, 
            categotyId
        }
        const post = await Post.update(postUpdate, {
            where: {id}
        })
        return post
        ? res.status(200).json({message: 'Post updated successfully!'})
        : res.status(400).json({message: 'Post not updated!'})
    }catch(error){
        return res.status(500).json({message: 'Server Error!'})
    }
}

controller.getOne = async(req, res) => {
    try{
        const {id} = req.params
        const post = await Post.findOne({
            where: {
                id
            },
            include:[
                model.Category,
                model.Admin
            ]
        })
        return post
        ? res.status(200).json({message: 'post detail', data: post})
        : res.status(400).json({message: 'post not found!'})
    }catch(error){
        return res.status(500).json({message: 'Server Error!'})
    }
}

controller.delete = async (req, res) => {
    try{
        const { id } = req.params
        const deletePost = await Post.destroy({
            where: {id}
        })
        return deletePost
        ? res.status(200).json({message: 'Post deleted successfully!'})
        : res.status(400).json({message: 'Post not deleted!'})
    }catch(error){
        return res.status(500).json({message:'Server Error!'})
    }
}


module.exports = controller;