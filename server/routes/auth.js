const router = require('express').Router()

const {login} = require('../control/auth');

router.get('/login', login);

module.exports = router;