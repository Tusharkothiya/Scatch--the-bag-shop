const mongoose = require('mongoose');

let productSchema = new mongoose.Schema(
    {
        image: {
            type: String,
            required: true
        },
        name: {
            type: String,
            required: true,
            trim: true
        },
        price: {
            type: Number,
            required: true
        },
        discount: {
            type: Number,
            default: 0
        },
        bgcolor: {
            type: String,
            required: true
        },
        panelcolor: {
            type: String,
            required: true
        },
        textcolor: {
            type: String,
            required: true
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model('Product', productSchema);