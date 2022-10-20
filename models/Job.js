const mongoose = require('mongoose')

const JobSchema = new mongoose.Schema({
    company: {
        type: String,
        required: [true, 'please provide company name'],
        maxLength:50
    },
    position: {
        type: String,
        required: [true, 'please provide position name'],
        maxLength:100
    },
    status: {
        type: String,
        enum:['interview', 'declined', 'pending'],
        default: 'pending'
    },
    createdBy:{
        type: mongoose.Types.ObjectId,
        ref:'User',
        required: [true, 'please provide a user']
    }

}, {timestamps:true})


module.exports = mongoose.model('Job', JobSchema)