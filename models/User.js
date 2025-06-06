const mongoose = require('mongoose');

const useSchema = mongoose.Schema({
    email: { 
        type: String,
        require: true,
    },
    passwordHash: {
        type: String,
        require: true,
    },
    name	: {
        type: String,
        require: true,
    },
    contactPhone: {
        type: String,
        require: false,
    }
});

module.exports = mongoose.model('User', useSchema);