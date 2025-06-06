const database = require('../../database/database');

const singupUser = async (userData) => {
    try {
        const { email, name } = userData;
        const findExsistingUser = await database.userCollection.find( {email: email});
        console.log(findExsistingUser);
    }
    catch(err) {

    }
};

module.exports = singupUser;