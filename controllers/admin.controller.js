const model = require('../models')
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');


const salt = 10
const Admin = model.Admin;
const controller = {};

controller.register = async (req, res) => {
    try{
        const { password, name, email } = req.body;

        const checkEmail = await Admin.findOne({
            where: {
                email: email
            }
        });
        if(checkEmail){
            return res.status(400).json({
                message: 'Email already exits!'
            });
        }

        const hash = await bcrypt.hash(password, salt)
        const registerData = {
            name: name,
            email: email,
            password: hash
        };
        const addAdmin = await Admin.create(registerData);
        return addAdmin 
        ? res.json({message: 'Admin added successfully!', data: addAdmin}) 
        : req.status(400).json({message: 'error in register admin'});
    }catch(error){
        return res.status(500).send({
            message: 'Server Error'
        });
    }
}

controller.login = async(req, res) => {
    try{
        const { email, password } = req.body;
        const user = await Admin.findOne({
            where: {email: email}
        })
        if(user){
            const {name, email, id} = user;
            const checkPassword = await bcrypt.compare(password, user.password);
            if(checkPassword){
                const token = jwt.sign({ name:  name, email: email, id:id}, process.env.JWT_KEY);
                res.cookie('loginToken', token);
                return res.json({
                    message: 'Login successfull!',
                    data: user
                });
            }else{
                return res.status(400).send({
                    message: 'Email or password is wrong!'
                });
            }
        }else{
            return res.status(400).send({
                message: 'Email or password is wrong!'
            });
        }
    }catch(error){
        console.log(error.message);
        return res.status(500).send({
            message: 'Server Error'
        });
    }
}

controller.verify = async(req, res) => {
    res.send({message: 'OK'});
}

controller.logout = async (req, res) => {
    try{
        res.clearCookie("loginToken");
        res.status(200).json({message: 'Logout successfully!'});
    }catch(error){
        res.status(500).json({message: 'Server Error!'});
    }
}


module.exports = controller;