var express = require('express');
var router = express.Router();
const {check} = require('express-validator')
const {homepage,signup} = require('../controllers/indexController')

/* GET home page. */
router.get('/', homepage);

router.post('/signup',[
    check('username').isLength({min: 5}).withMessage('Username must be at least 5 characters long'),
    check('password').isLength({min: 5}).withMessage('Password must be at least 5 characters long'),
    check('email').isEmail().withMessage('Email must be valid')
], signup)



module.exports = router;
