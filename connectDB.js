const mongoose=require('mongoose')
 
const connectDB=()=>{
    mongoose.connect('mongodb://localhost:27017/Checkpointmongoose')
    .then(()=>console.log("dataBase is connected"))
    .catch(()=>console.log("dataBase connection failed"))
 
}
 
module.exports=connectDB
