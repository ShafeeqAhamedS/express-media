const express = require('express');
const router = express.Router();

const {testAPI}  = require('../controllers/mediaController');

router.get('/', testAPI)

module.exports = router;