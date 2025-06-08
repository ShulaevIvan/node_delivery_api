const router = require('express').Router();
const singupUser = require('../handlers/singupUser');
const removeUser = require('../handlers/removeUser');


router.get('/', async (req, res) => {
    data = {
        email: 'test',
        name: ''
    }
    // await database.createUser();
    res.status(200).json({data: 'users'});
});

router.post('/singup', async (req, res) => {
    try {
        const data = req.body;

        await singupUser(data)
        .then((statusData) => {
            if (statusData && !statusData.err) {
                res.status(201).json({responseText: statusData.text});
                return;
            }
            else if (statusData && statusData.err) {
                res.status(403).json({responseText: statusData.text});
                return;
            }
            return res.status(200).json({responseText: statusData.text});
        })
    }
    catch(err) {
        res.status(500).json({responseText: 'unknown err POST /singup'});
    }   
});

router.delete('/delete', async (req, res) => {
    const data = req.body;

    await removeUser(data)
    .then((statusData) => {
        console.log(statusData)
        if (statusData && !statusData.err) {
            return res.status(200).json({responseText: statusData.text});
        }
        return res.status(500).json({responseText: 'err'});
    });

});

module.exports = router;