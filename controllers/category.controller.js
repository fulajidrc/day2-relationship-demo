const model = require('../models');
const Category = model.Category;
const controller = {}

controller.create = async (req, res) => {
    try{
        const { title, description } = req.body;
        const categoryData = {
            title: title,
            description: description
        }
        const createCategory = await Category.create(categoryData);
        return createCategory
        ? res.status(201).json({
            message: 'Category added successfully!',
            data: createCategory
        })
        : res.status(400).json({
            message: 'Categoty not added'
        });
    }catch(error){
        return res.status(500).json({
            message: 'Server Error!'
        })
    }
}

controller.getAll = async (req, res) => {
    try{
        const categories = await Category.findAll({

        });
        return categories 
        ? res.status(400).json({
            message: 'Category list!',
            data: categories
        })
        : res.status(400).json({
            message: 'Category not found!'
        })
    }catch(error){
        return res.status(500).json({
            message: 'Server Error'
        });
    }
}

controller.update = async (req, res) => {
    try{
        const {id} = req.params;
        const {title, description} = req.body;
        const categoryData = {
            title,
            description
        }
        const updateCategory = await Category.update(categoryData, {
            where: {
                id: id
            }
        })
        return updateCategory 
        ? res.status(200).json({
            message: 'Category updated successfully!'
        })
        : res.status(400).json({
            message: 'Category not updated!'
        })
    }catch(error){
        return res.status(500).json({
            message: 'Server Error!'
        })
    }
}

controller.delete = async (req, res) => {
    try{

    }catch(error){
        
    }
}

module.exports = controller;