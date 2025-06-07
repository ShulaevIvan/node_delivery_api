const UserModule = require('../../modules/UserModule');

const singupUser = async (userData) => {
    try {
        const { email, name, passwordHash, contactPhone } = userData;
        let responseText = {};
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
            console.log(resultData)
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
        console.log('test');
        return {
            text: `err to create user`,
            err: true
        }
    }
};

module.exports = singupUser;