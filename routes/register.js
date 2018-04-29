var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/siDb', ['registered_students']);
var wifi = require('node-wifi');

// Save stud
router.post('/register', function(req, res, next) {
    var userWifi = '';

    // check wifi
    wifi.init({
        iface : null
    });
    // List the current wifi connections
    wifi.getCurrentConnections(function(err, currentConnections) {
        if (err) {
            console.log(err);
        }
        console.log(currentConnections);
        userWifi = currentConnections[0]['mac'];
        console.log('USER WIFI: ' + userWifi);


        if(userWifi !== '' && userWifi === 'c4:e9:84:b5:b4:ca') { // put your wifi mac address
            db.registered_students.save({user:req.body.user, code: req.body.code}, function(err, result){
                if(result){
                    res.send({result: result});
                } else {
                    return res.status(400).send(err);
                }
            });
        }  
        else {
            console.log("Wrong wifi");
            return res.status(400).send(err);
        }

    });
    wifi.scan().then(function (networks) {
    // networks
    }).catch(function (error) {
    // error
    })


    
});


router.get('/attendance', function(req, res, next) {
    db.registered_students.find({code:req.query.code}, function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
});

module.exports = router;