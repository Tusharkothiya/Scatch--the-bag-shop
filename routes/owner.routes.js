const express = require('express');
const router = express.Router();
const controller = require('../controllers/owner.controller');

router.get('/', (req, res) => {
    res.send('hello from owner');
})

router.route('/create').post(controller.createOwner);


module.exports = router;