const mongoose = require('mongoose');
require('dotenv').config();
const dbConnect = () =>{
    mongoose.connect(process.env.DATABASE_URL)
    .then(() => {
        console.log("Connected to database is successful");
    })
    .catch((error) => {
           console.log(error);
           console.error(error.massage);
           process.exit(1);
    })
}

module.exports = dbConnect;