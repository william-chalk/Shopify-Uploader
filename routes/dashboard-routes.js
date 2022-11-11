const router = require('express').Router();
const sequelize = require('../config/connection');
const { User } = require('../models');
const auth = require('../middleware/auth');


router.get('/', (req, res) => {
  console.log('======================');
    res.render('dashboard');
});


module.exports = router;