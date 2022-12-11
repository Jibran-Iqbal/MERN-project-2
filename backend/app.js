const express = require('express')
const app = express()
const mongoose = require('mongoose')
const router = require('./routes/book-routes')
const cors = require('cors')

require('dotenv').config()


app.use(express.json())
app.use(cors())
app.use("/books",router)

mongoose.connect(process.env.CONNECTION_URL).then(()=>console.log("Connected to DB")).then(()=>{
    app.listen(5000)
}).catch((err)=>console.log(err))

