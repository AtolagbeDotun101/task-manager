const mongoose = require('mongoose');

const taskSchema =  mongoose.Schema({
    name: {
        type: String,
        required:[true, 'insert text'],
        maxLenght: [20, 'text cant be more than 20'],
        trim: true
    },
    completed: {
        type:Boolean,
        default:false
    }
})



module.exports = mongoose.model('Task', taskSchema);;