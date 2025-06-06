const router = require('express').Router();
const database = require('../../database/database');
const singupUser = require('../handlers/singupUser');


router.get('/', async (req, res) => {
    data = {
        email: 'test',
        name: ''
    }
    await singupUser(data);
    // await database.createUser();
    res.status(200).json({data: 'users'});
});

router.post('/', async (req, res) => {

})

module.exports = router;