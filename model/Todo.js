const mongoose = require('mongoose');

const createSchema =  mongoose.Schema({
    title : {
        type : String,
        required : true,
        maxLength : 255,
    },
    description : {
        type : String,
        required : true,
        maxLength : 255,
    },
    createdAt : {
        type : Date,
        required : true,
        default : Date.now()
    },
    updatedAt : {
        type : Date,
        required : true,
        default : Date.now()
    }
})

module.exports  =  mongoose.model('Users' , createSchema);