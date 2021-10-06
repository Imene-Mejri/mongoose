const mongoose=require('mongoose');

const schema=mongoose.Schema 

//la creation de schema
//first step
const contactschema=new schema({
    name:{
        type:String,
        required:true,
        unique:true
    },
    age:{
        type:Number
    },
    favoriteFoods:{
        type:[String]
    }
   
})
 module.exports=Person=mongoose.model('personlist',contactschema)