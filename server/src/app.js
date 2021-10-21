// establishing imports
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

// building express server
const app = express(); //build express server
app.use(morgan('combined')); //prints logs in a certain way
app.use(express.json()); //allows express app to parse json requests
app.use(cors()); //allows any client to access

//gets status from endpoint, when it gets a request it sends hello world
app.get('/status', (req, res) => {
    res.send({
        message: 'Hello World!'
    })
}) 

,app.listen(process.env.port || 8081) //
