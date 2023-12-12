const mongoose = require('mongoose');
require('dotenv').config()

const mongoURI = "mongodb://127.0.0.1:27017/mydiary?directConnection=true"    //process.env.MONGO

const connectToMongo = () => {                                                                                             //     .then(() => console.log("Mongo connected"))  //     .catch(err => console.log(err));
   try {
          mongoose.connect(mongoURI)                                                                                              
           console.log('mongo is connected successfully')
   } catch (error) {
        console.error('MongoDB connection error:', error);
   }

}

module.exports = connectToMongo

