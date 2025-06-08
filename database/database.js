const mongoose = require('mongoose');
const userCollection = require('../models/User');

class Database {
    constructor() {
        this.userCollection = userCollection;
    }
    async connect() {
        try {
            await mongoose.connect(`${process.env.DATABASE_URL}`)
            .then((data) => {
                console.log('connected to db - ok');
            })
            .catch((err) => {
                console.log(err);
                console.log('connected to db - err');
            })
        }
        catch(err) {
            console.log('connected to db - err');
        }
    }
};

module.exports = new Database();