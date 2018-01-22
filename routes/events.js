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

    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET,HEAD,OPTIONS,POST,PUT");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization")
    res.jsonp(result);
});

module.exports = router;
