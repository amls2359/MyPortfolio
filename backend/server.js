const express= require('express')
const app = express()
const cors = require('cors')
const path = require('path')
require('dotenv').config()

const authRoutes = require('./routes/authRoutes')




app.use(cors())
app.use (express.json())
app.use(express.static(path.join(__dirname, '../frontend/build')));

app.use('/', authRoutes)

const frontendPath = path.join(__dirname, '../frontend/build');

app.get(/.*/, (req, res) => {
  res.sendFile(path.join(frontendPath, 'index.html'));
});


const PORT = process.env.PORT || 5000; 
app.listen (PORT ,() => {
    console.log(`Server is running on port ${process.env.PORT}`)
})