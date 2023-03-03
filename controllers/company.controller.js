const models = require('../models')
const Company = models.Company
const Cin = models.Cin
const controller = {};

controller.getAll = async (req, res) => {
    try{
        const cins = await Cin.findAll({
            //include: 'CinDins',
            include : [{
                model: models.CinDin,
                include: [{
                    model: models.Din
                }, {
                    model: models.Cin
                }]
            }]
        });
        // const companies = await Company.findAll({
        //     include: 'employes'
        // });
        return res.json({message: 'Company list', data: cins})
    }catch(error){
        console.log(error);
        return res.status(500).send({
            message: 'Server error!'
        });
    }
}

controller.create = async (req, res) => {
    try{
        const { name } = req.body;
        const company = await Company.create({name: name});
        return company 
        ? res.json({ message: 'Company added successfully!',data: company}) 
        : res.status(400).json({message: 'Company not added!',data: []});
    }catch(error){
        return res.status(500).send({
            message: 'Server error!'
        });
    }
}

controller.update = async (req, res) => {
    try{
        const {name} = req.body;
        const {id} = req.params;
        const updateCompany = await Company.update({
            name: name
        }, {
            where: {
                id: id
            }
        })
        return updateCompany
        ? res.json({message: 'Company updated successfully!'})
        : res.status(400).json({message: 'company not updated!'})
    }catch(error){
        return res.status(500).send({
            message: 'Server error!'
        });
    }
}

controller.delete = async (req, res) => {
    try{
        const {id} = req.params;
        const deleteCompany = await Company.destroy({where: {id: id}})
        return deleteCompany 
        ? res.json({message: 'Company deleted successfully!'})
        : res.status(400).json({message: 'company not deleted!'})
    }catch(error){
        return res.status(500).send({
            message: 'Server error!'
        });
    }
}

controller.getOne = async (req, res) => {
    try{
        const { id } = req.params
        const getCompany = await Company.findOne({
            where: {
                id: id
            }
        })
        return getCompany 
        ? res.json({message: 'Company detail!', data: getCompany})
        : res.status(400).json({message: 'company not found!'})
    }catch(error){
        return res.status(500).send({
            message: 'Server error!'
        });
    }
}

module.exports = controller;