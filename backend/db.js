const mongoose = require('mongoose');

const mongoURI = 'mongodb+srv://Lucarioknight:12345@cluster0.s0o48ew.mongodb.net/?retryWrites=true&w=majority'

const connectToMongo = () => {
    mongoose.connect(mongoURI)
        console.log('mongo is connected successfully')
}

module.exports = connectToMongo

// const connectToMongo = () => {
//      mongoose.connect(mongoURI, () => {
//          console.log('mongo connected')             //note mongoose.connect does not take a callback function anymore.
//   })
// }


// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// // Setup express app
// const app = express();

// app.use(
//     bodyParser.urlencoded({
//         extended: false
//     })
// );

// app.use(bodyParser.json());

// // Configure Mongo
// const db = "mongodb+srv://Lucarioknight:12345@cluster0.s0o48ew.mongodb.net/?retryWrites=true&w=majority";

// // Connect to Mongo with Mongoose
// mongoose
//     .connect(
//         db,
//         { useNewUrlParser: true }
//     )
//     .then(() => console.log("Mongo connected"))
//     .catch(err => console.log(err));

// // Specify the Port where the backend server can be accessed and start listening on that port
// const port = process.env.PORT 
// app.listen(port, () => console.log(`Server up and running on port ${port}.`));

