const router = require('express').Router();
const usersRouter = require('./apiRoutes/users');

router.get('/api', (req, res) => {
    res.json({data: 'ok'})
});

router.use('/api/users', usersRouter);

module.exports = router;