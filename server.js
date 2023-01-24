require("dotenv").config()

const express = require('express')
const mongoose = require('mongoose');
const app = express()

mongoose.set('strictQuery', true);
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true, useUnifiedTopology: true}).then(()=> {console.log(`Connected to MONgoDB`)}).catch((err) => {
    console.log(`Oh NO! Mongo Connect Lost`)
    console.log(err)
})

app.use(express.json())

app.listen(3000, ()=> console.log('server has started') )




// npm i --save-dev dotenv nodemon

//mongodb+srv://evictus:<password>@evictus.an690ya.mongodb.net/?retryWrites=true&w=majority