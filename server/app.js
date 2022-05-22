const express = require('express');
const cors = require('cors');
const app = express();

const port = 8000;
var schema=require('./database/schema');
const post = require('./routes/post');

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

app.use('/', post);

app.listen(port, ()=>{
    console.log('listening on port 8000')
});