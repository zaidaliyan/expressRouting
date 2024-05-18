const express=require('express')
const app=express()
const mongoose=require('mongoose')
require('dotenv').config()
const studentRoutes=require('./routes/student.route')
const port=process.env.port

mongoose.connect('mongodb://localhost:27017/studentdbjpmc')
.then(()=>{console.log("Connection Successful")})

app.use('/api/students',studentRoutes)

app.listen(port,()=>{
    console.log(`server listening on port ${port}`)
})