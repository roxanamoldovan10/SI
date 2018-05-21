var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/siDb', ['code']);
var db1 = mongojs('mongodb://localhost:27017/siDb', ['rooms']);
var http = require('http');

// Save code
router.post('/code', function(req, res, next) {
    db.code.save({code:req.body.code, room: req.body.room, date: req.body.date}, function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
    
});

// Get code
router.get('/getCode', function(req, res, next) {
    db.code.find({code:req.query.code}, function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
});
 
// Get rooms
router.get('/getRooms', function(req, res, next) {
    db1.rooms.find({email:req.query.email}, function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
});

// Get attendance
router.get('/getAttendance', function(req, res, next) {
    db.code.find({room:req.query.room}, function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
});

module.exports = router;