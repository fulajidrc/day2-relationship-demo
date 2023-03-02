const models = require('../models');
const User = models.User;
const {Op} = require('sequelize') 
const controller = {};

controller.getAll = async (req, res) => {
    try{
        const users = await User.findAll({
            include: ['company','days']
        })
        res.json({message: 'User\'s list!', data: users});
    }catch(error){
        res.status(500).json({message: 'Server Error'})
    }
}

controller.create = async (req, res) => {
    try{
        const checkUser = await User.findOne({
            where: {
                email: req.body.email
            }
        });
        if(checkUser){
            return res.status(400).json({
                message: 'Email already exits!'
            });
        }
        const user = {
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            companyId: req.body.companyId
        }
        const userData = await User.create(user);
        if(userData){
            res.json({message: 'User added successfully!', data: userData});
        }else{
            res.status(400).json({message: 'User not added!', data: []});
        }
    }catch(error){
        res.status(500).json({message: 'Server Error'})
    }
};

controller.update = async (req, res) => {
    try{
        const {id} = req.params;
        const { email, firstName, lastName, companyId} = req.body;
        const checkUser = await User.findOne({
            where: {
                email: req.body.email,
                id: {
                    [Op.ne]: id
                }
            }
        });
        if(checkUser){
            return res.status(400).json({
                message: 'Email already exits!'
            });
        }
        
        const user = {
            email: email,
            firstName: firstName,
            lastName: lastName,
            companyId: companyId
        }

        const updateUser = await User.update(user, {
            where: {id: id}
        })

        if(updateUser){
            return res.status(200).json({
                message: 'User updated successfully!',
            });
        }else{
            return res.status(400).json({
                message: 'User not updated!'
            });
        }
    }catch(error){
        res.status(500).json({message: 'Server Error'})
    }
}

controller.delete = async (req, res) => {
    try{
        const {id} = req.params
        const deleteUser = await User.destroy({
            where: {
                id: id
            }
        });
        if(deleteUser){
            res.json({message: 'User deleted successfully!', data: []});
        }else{
            res.status(400).json({message: 'User not deleted!'});
        }
    }catch(error){
        res.status(500).json({message: 'Server Error'})
    }
}

controller.getOne = async (req, res) => {
    try{
        const {id} = req.params;
        const user = await User.findOne({
            where: {
                id: id
            }
        })
        if(user){
            res.json({message: 'User data!', data: user});
        }else{
            res.status(400).json({message: 'User not found!', data: []});
        }
    }catch(error){
        res.status(500).json({message: 'Server Error'})  
    }
}


module.exports = controller;