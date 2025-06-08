const UserModule = require('../../modules/UserModule');

const singupUser = async (userData) => {
    const responseText = {};
    try {
        const { email, name, passwordHash, contactPhone } = userData;
        const existingUser = await UserModule.findByEmail(email);

        if (existingUser && existingUser.length > 0) {
            responseText.text = `A user with ${email} exists`;
            responseText.err = true;

            return responseText;
        }
        return await UserModule.create({
            email: email, 
            name: name, 
            passwordHash: passwordHash, 
            contactPhone: contactPhone
        })
        .then((resultData) => {
            responseText.text = 'user created!';
            responseText.err = false;
            
            return responseText;
        })
        .catch((err) => {
            responseText.text = err;
            responseText.err = true;

            return responseText;
        });
       
    }
    catch(err) {
        responseText.text = `err to create user`;
        responseText.err = true;

        return responseText;
    }
};

module.exports = singupUser;