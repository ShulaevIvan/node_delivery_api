const userCollection = require('../models/User');

class UserModule {
    constructor() {
        this.userCollection = userCollection;
    };

    async create(userData) {
        try {
            return new Promise((resolve, reject) => {
                const user = {
                    email: userData.email,
                    passwordHash: userData.email,
                    name: userData.name,
                    contactPhone: userData.contactPhone ? userData.contactPhone : '',
                };
                const userObj = this.userCollection.create(user);
                resolve(userObj);
            });
        }
        catch(err) {
            console.log('err');
        }
    };

    async remove(email) {
        try {
            return new Promise((resolve, reject) => {
                const userObj = this.userCollection.deleteOne({ email: email});
                resolve(userObj);
            })
        }
        catch(err) {
            console.log('err');
        }
    }

    async findByEmail(email) {
        try {
            return new Promise((resolve, reject) => {
                const targetUser = this.userCollection.find({email: email}) ? userCollection.find({email: email}) : null;
                resolve(targetUser);
            })
        }
        catch(err) {
        
        }
    };
};

module.exports = new UserModule();