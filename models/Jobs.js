const mongoose = require('mongoose')

const JobsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    year: {
        type: String,
        required: true
    },
    make: {
        type: String,
        required: true
    },
    model: {
        type: String,
        required: true
    },
    engine: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: false
    },
    repair: {
        type: String,
        required: true
    },
    job_type: {
        type: String,
        required: true
    },
    job_description: {
        type: String,
        required: false
    },
    employee_assigned: {
        type: String,
        required: false
    },
    priority: {
        type: String,
        required: true
    },
    status: {
        type: Number,
        required: true
    },
    date: {
        type: Date,
        default: Date.now
    },
    labor_hours: {
        type: Number,
        required: true
    },
    parts_list: {
        type: Object,
        required: true
    },
    job_total: {
        type: Number,
        required: true
    },
    complete: {
        type: Boolean,
        default: false
    }
})

module.exports = mongoose.model('Jobs', JobsSchema) 