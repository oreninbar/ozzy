const mongoose=require('mongoos');
const Schema=mongoose.Schema;


const contactSchema=new Schema({
    fullName:String,
    email:String,
    phoneNumber:String
})


const Contact=mongoose.model("contact", contactSchema)

module.exports=Contact

