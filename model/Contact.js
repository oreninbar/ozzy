const mongoose=require('mongoose');
const Schema=mongoose.Schema;


const contactSchema=new Schema({
    inputName:String,
    inputEmail:String,
    inputPhone:String
})


const Contact=mongoose.model("contact", contactSchema)

module.exports=Contact



