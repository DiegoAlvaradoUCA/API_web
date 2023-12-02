const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    userName : {
        type : String,
        required: true
    },
    password : {
        type: String,
        require: true
    },
    rol: {
        type: String,
        require: true
    }
})

const Userdb = mongoose.model('userdb', schema);

module.exports = Userdb;