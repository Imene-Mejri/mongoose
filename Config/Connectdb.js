const mongoose=require('mongoose')
const connectdb=()=>{
    mongoose.connect('mongodb://localhost/pupildata',()=>{
        try{
            console.log('database is connected')
        }catch{
            console.log('database is not connected sorry')
        }
    })
}
module.exports=connectdb;