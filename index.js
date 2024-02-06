const express = require('express');

const app = express();

require('dotenv').config();

const PORT  = process.env.PORT || 8000

// middleware is used to parse json request body
app.use(express.json());

const todoRoutes = require('./routes/routes');
app.use('/api/v1', todoRoutes);

app.listen(PORT, function(){
    console.log(`server listening on port ${PORT}`);
})

const dbConnect = require('./config/database');
dbConnect();

app.get('/', function(req,res){
      res.send(`<h1>Welcome to Express application</h1>`);
});