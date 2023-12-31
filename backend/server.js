require('dotenv').config()

const express = require('express')
const connectToMongo = require('./db')

var cors = require("cors")

//instance for mongodb
connectToMongo();
//creating an instance for  express
const app = express()
// app.use(cors())
app.use(cors({origin:"http://localhost:3000"}))

app.use(express.json())     //middleware required as we are using req.body
//Available routes
// app.get('/',(req,res) => {
//   res.json({msg : 'welcome to the app'})
// })
app.use('/api/auth',require('./routes/auth'))
app.use('/api/note',require('./routes/note'))

//listen for the incoming http requests (it can be in any port here it is http://localhost:4000/)
const port =  4000       //process.env.PORT
// const port =  process.env.PORT
app.listen(port,() => {
  console.log(`MyDiary backend is listening on port ${port}`)
})




