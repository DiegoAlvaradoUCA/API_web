const mongoose = require('mongoose');

var schema = new mongoose.Schema({
    packageName : {
        type : String,
        required: true
    },
    description : {
        type: String,
        required: true,
    },
    price : {
        type: Number,
        required: true,
    },
    meetingPoint : {
        type: String,
        required: true,
    },
    category : {
        type: String,
        required: true,
    },
    creator : {
        type: String,
        required: true,
    },

})

const Packagedb = mongoose.model('packagedb', schema);

module.exports = Packagedb;