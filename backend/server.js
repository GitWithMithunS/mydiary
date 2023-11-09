require('dotenv').config()

const express = require('express')
const connectToMongo = require('./db')

connectToMongo();

//creating an instance for  express
const app = express()

app.use(express.json())
//Available routes
app.get('/',(req,res) => {
  res.json({msg : 'welcome to the app'})
})
app.use('/api/auth',require('./routes/auth'))
app.use('/api/note',require('./routes/note'))

//listen for the incoming http requests (it can be in any port here it is http://localhost:4000/)
const port = process.env.PORT
app.listen(port,() => {
  console.log('listening on port',port)
})




