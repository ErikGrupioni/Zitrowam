const mongoose = require('mongoose');

const WmsgSchema = new mongoose.Schema({
    author: String,
    content: String,
    phonenumber: Number,
    createdAt:{
        type:Date,
        default: Date.now,
    },
});

module.exports = mongoose.model('Wmsg', WmsgSchema)