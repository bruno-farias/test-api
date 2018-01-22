var express = require('express');
var router = express.Router();

/* GET home page. */
router.all('/', function(req, res, next) {
    const result = [
        {
            id: 123,
            event: 'Baile do safadao'
        },
        {
            id: 321,
            event: 'Sarrada do banguela'
        }
    ]

    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
});

module.exports = router;
