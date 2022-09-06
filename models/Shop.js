const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema({
    userId: {
        type: String,
        required: true
    },
    shopName: {
        type: String,
        required: true
    },
    shopEmail: {
        type: String,
        required: true
    },
    shopPhone: {
        type: String,
        required: true
    },
    shopAddress: {
        type: String,
        required: true
    },
    shopCity: {
        type: String,
        required: true
    },
    shopState: {
        type: String,
        required: true
    },
    shopZip: {
        type: String,
        required: true
    },
    shopWebsite: {
        type: String,
        required: true
    },
    shopOpen: {
        type: String,
        required: true
    },
    shopClose: {
        type: String,
        required: true
    },
    shopType: {
        type: String,
        required: true
    },
    laborRate: {
        type: Number,
        required: true
    },
    average_markup: {
        type: Number,
        required: true
    },
    employeeData: {
        type: Array,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
})

module.exports = mongoose.model('Shop', ShopSchema)
