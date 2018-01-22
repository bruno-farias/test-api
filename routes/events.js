var express = require('express');
var router = express.Router();
var rp = require('request-promise');

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

router.all('/test', function (req, res, next) {
    let options = { method: 'POST',
        url: 'http://pdv.blueticket.com.br/WebService/cliente.php',
        qs: { op: 'auto' },
        formData: { op: 'auto', t: '666' } };

    rp(options)
        .then(function (parsedBody) {
            res.json(decodeURIComponent(parsedBody))
        })
        .catch(function (err) {
            console.log(err)
        });
})

module.exports = router;
