const express = require('express');
const mongoose = require('./config/mongoose');
const bodyParser = require('body-parser');

const app = express();
const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use('/',require('./routes'))

//listen to port 8000
app.listen(process.env.PORT || 8000 ,(err) => {
    if(err){
        console.log(err);
    }
    console.log('server started on port 8000');
});