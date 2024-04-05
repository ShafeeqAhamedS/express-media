const express = require('express') 
const router = express.Router() 
const path = require('path') 

const { uploadFile, getFile, listFiles} = require('../controllers/mediaController') 

router.post('/upload', uploadFile, (req, res) => {
    res.send('File uploaded!') 
}) 

router.get('/files', listFiles)

router.get('/download/:name', getFile) 

module.exports = router 