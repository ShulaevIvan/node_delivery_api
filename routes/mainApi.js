const router = require('express').Router();
const usersRouter = require('./apiRoutes/users');
const adversmentsRouter = require('./apiRoutes/adversments');

router.get('/api', (req, res) => {
    res.json({data: 'ok'})
});

router.use('/api/users', usersRouter);
router.use('/api/adversments', adversmentsRouter);

module.exports = router;