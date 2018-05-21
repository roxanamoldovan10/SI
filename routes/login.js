var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://localhost:27017/siDb', ['user']);

// Get login
router.get('/login', function(req, res, next) {
    db.user.findOne({email:req.query.email, password:req.query.password}, function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
    
});

// Register
router.post('/register', function(req, res, next) {
    db.user.save({email:req.body.email, password:req.body.password, role: 1}, function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
    
});

// Add new teacher
router.post('/add', function(req, res, next) {
    db.user.save({email:req.body.email, password:req.body.password, role: 2}, function(err, result){
        if(result){
            res.send({result: result});
        } else {
            return res.status(400).send(err);
        }
    });
    
});
 
module.exports = router;