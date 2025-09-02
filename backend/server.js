const express= require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const authRoutes = require('./routes/authRoutes')




app.use(cors())
app.use (express.json())

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.error('MongoDB connection error:', err));

app.use('/', authRoutes)

app.listen (process.env.PORT ,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
})