const router = require('express').Router();
const singupUser = require('../handlers/singupUser');


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
            console.log(statusData)
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

module.exports = router;