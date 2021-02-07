const express = require('express');
const bodyParser = require("body-parser");
const cors = require("cors");

const app=express();

// var corsOptions = {
//     origin: "http://localhost:3306"
//   };

// app.use(cors(corsOptions));

// parse requests of content-type - application/json
app.use(bodyParser.json());

//parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true }));


const db=require('./app/models/app');
db.sequelize.sync();

// test route
app.get('/test',(req,res,next)=>{
    res.status(200).json('working');
});


require('./app/routes/turorial_routes')(app);
require('./app/routes/comment_routes')(app);

// set port, listen for requests
const PORT = process.env.PORT || 3000;

app.listen(PORT);


