const express = require('express');
const bodyParser = require('body-parser');

const router = express.Router();
router.use(bodyParser.urlencoded({extended : false}));

router.get('/', (req, res, next) => {
    res.send('<h1>Hello from express!</h1>')
})

module.exports = router;