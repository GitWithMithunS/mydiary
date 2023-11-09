const mongoose = require('mongoose');
require('dotenv').config()

const mongoURI = process.env.MONGO

const connectToMongo = () => {                                //     .then(() => console.log("Mongo connected"))
   mongoose.connect(mongoURI)                                //     .catch(err => console.log(err));
        console.log('mongo is connected successfully')
}

module.exports = connectToMongo

