const mongoose = require('mongoose');

const adversmentSchema = ({
    shortText: {
        type: String,        
        default: '',
        unique: false,
        require: true
    },
    description: {
        type: String,
        default: '',
        unique: false,
        require: false
    },
    images: {
        type: String,
        unique: false,
        require: false,
        default: []
    },
    userId: {
        type: mongoose.ObjectId,
        unique: false,
        require: true
    },
    createdAt: {
        type: Date,
        unique: false,
        require: true
    },
    updatedAt: {
        type: Date,
        unique: false,
        require: true
    },
    tags: {
        type: String,
        unique: false,
        require: false
    },
    isDeleted: {
        type: boolean,
        unique: false,
        require: false
    }
});



module.exports = mongoose.Model('Adversment', adversmentSchema)