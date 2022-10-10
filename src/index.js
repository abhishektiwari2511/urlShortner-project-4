const express =require('express')
const app =express()
const mongoose = require('mongoose')
const route = require('./routes/route')

app.use(express.json())



mongoose.connect('mongodb://abhishek251119:abhishek2511@ac-z8sfqfr-shard-00-00.2zhuz3d.mongodb.net:27017,ac-z8sfqfr-shard-00-01.2zhuz3d.mongodb.net:27017,ac-z8sfqfr-shard-00-02.2zhuz3d.mongodb.net:27017/test?replicaSet=atlas-4htqnt-shard-0&ssl=true&authSource=admin', {
    useNewUrlParser: true
})
.then( ()=> console.log("MongoDb is connected"))
.catch( err => console.log(err))

// app.use(express.json())

app.use('/', route)

app.listen(3000, function () {
    console.log('Express is running on port 3000')
})