require('dotenv').config()
// const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://Lucarioknight:12345@cluster0.s0o48ew.mongodb.net/?retryWrites=true&w=majority'

const express = require('express')
const connectToMongo = require('./db')
// const connectToMongo = () => {
//   mongoose.connect(mongoURI)

//     console.log('mongo connected')
  
// }
connectToMongo();

//creating an instance for  express
const app = express()

//routes
app.get('/',(req,res) => {
  res.json({msg : 'welcome to the app'})
})

//listen for the incoming http requests (it can be in any port here it is http://localhost:4000/)
app.listen(process.env.PORT,() => {
  console.log('listening on port',process.env.PORT)
})



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


