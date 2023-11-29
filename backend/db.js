const mongoose = require('mongoose');
require('dotenv').config()

const mongoURI = process.env.MONGO

const connectToMongo = () => {                                                                                             //     .then(() => console.log("Mongo connected"))  //     .catch(err => console.log(err));
   try {
          mongoose.connect(mongoURI)                                                                                              
           console.log('mongo is connected successfully')
   } catch (error) {
        
   }

}

module.exports = connectToMongo

