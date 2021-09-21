const express = require('express')
const router = express.Router()
const data = require('../../data/index')

router.get('/', async(req, res) => {
    res.json({data: data.data})
})
module.exports = router;
