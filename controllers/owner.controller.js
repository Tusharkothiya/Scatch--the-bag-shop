const OwnerModel = require('../models/owner.model');

exports.createOwner = async (req,res) => {
    try {
        const {fullname,email,password} = req.body;
        let owner = await OwnerModel.find();
        if(owner.length > 0) {
            return res.status(505).send("You don't have permission to create new owner!");
        }
        let createdOwner = await new OwnerModel({
            fullname,
            email,
            password
        });
        await createdOwner.save();
        res.send(createdOwner);
    } catch (error) {
        console.log(error);
    }
}