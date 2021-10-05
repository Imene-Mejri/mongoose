const mongoose=require('mongoose')
const connectdb=require('./Config/Connectdb')

connectdb()
/* const person=require('./Models/PERSON') */

//CRUD
//create a new person 
/*  const person=new person ({
    name:'Imene',
    age:29,
    favoriteFoods:['lasagne','sbaguetti','crepe']

})
//the save function 
person.save(()=>{
    try{
        console.log('the person has been added')

    }catch(error){
        console.log(error)
    }
})  */