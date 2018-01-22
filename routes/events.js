var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
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

    res.setHeader('Content-Type', 'application/json');
    res.send(JSON.stringify(result));
});

module.exports = router;
