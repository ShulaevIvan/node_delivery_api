const UserModule = require('../../modules/UserModule');

const removeUser = async (userData) => {
    const responseText = {};
    try {
        return new Promise((resolve, reject) => {
            const { id, email  } = userData;
            
            UserModule.findByEmail(email)
            .then((resultData) => {
                if (resultData && resultData.length > 0) {
                    UserModule.remove(email)
                    .then((resultData) => {
                        responseText.text = 'success';
                        responseText.err = false;

                        resolve(responseText);
                        return;
                    });
                }
                else {
                    responseText.text = 'user not exists';
                    responseText.err = false;

                    resolve(responseText);
                }

            })
            .catch((err) => {
                responseText.text = 'user not exists';
                responseText.err = false;

                resolve(responseText);
            })
        })
    }
    catch(err) {
        responseText.text = 'err to delete user';
        responseText.err = true;
        
        return responseText;
    }
};

module.exports = removeUser;