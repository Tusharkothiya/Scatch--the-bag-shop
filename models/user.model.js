const mongoose = require('mongoose');

let userSchema = new mongoose.Schema(
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
        cart: {
            type: Array,
            default: []
        },
        isAdmin: {
            type: Boolean,
            default: false
        },
        orders: {
            type: Array,
            default: []
        },
        contact: {
            type: Number,
            required: true
        },
        picture: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('User', userSchema);