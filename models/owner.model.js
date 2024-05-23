const mongoose = require('mongoose');

let ownerSchema = new mongoose.Schema(
    {
        fullname: {
            type: String,
            require: true,
            trim: true
        },
        email: {
            type: String,
            require: true,
            trim: true
        },
        password: {
            type: String,
            required: true
        },
        products: {
            type: Array,
            default: []
        },
        picture: {
            type: String,
        },
        gstin: String
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Owner', ownerSchema);