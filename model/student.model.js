const mongoose=require('mongoose')
const studentSchema=mongoose.Schema({
    _id:Number,
    name:{
        type:String,
        required:true
    },
    email:String,
    password:String
})
const studentModel=mongoose.model("student",studentSchema)
module.exports=studentModel