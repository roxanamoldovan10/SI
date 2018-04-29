const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const api = require('./routes/login');
const code = require('./routes/code');
const register = require('./routes/register');
const app = express();
 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false })); 
app.use(express.static(path.join(__dirname, 'dist'))); // Point static path to dist
 
app.use('/api', api); // Set our api routes 
app.use('/cod', code);
app.use('/reg', register);
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist/index.html'));
}); //Catch all other routes and return the index file
 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
const port = process.env.PORT || '3000';  //port setting
app.set('port', port);
app.listen(port, ()=> console.log(`Listening at localhost:${port}`));