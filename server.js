const mongoose=require('mongoose')
const connectdb=require('./Config/Connectdb')

connectdb()
  const Person=require('./Models/PERSON') 

 //CRUD
//create a new person 

const addSavePerson = new Person({
    name: "Imene",
    age: 29,
    favoriteFoods: ['lasagne','sbaguetti','crepe'],
  });
 

//the save function 
 addSavePerson.save(()=>{
    try{
        console.log('the person has been added now')

    }catch(error){
        console.log(error)
    }
})   
/* {*************************************************************************************} */

//create many person
 Person.create([
    {name: "Sarra",
    age: 26,
    favoriteFoods: ['lcouscous','soupe','crepe'],
  },
  {
    name: "koussay",
    age: 14,
    favoriteFoods: ['sbaguetti','cake'],
  },
  {
    name: "Yassine",
    age: 22,
    favoriteFoods: ['souchi','Fruits','crepe','Vegetables','pizza'],
  },
  {
    name: "koussay",
    age: 2,
    favoriteFoods: ['milk','soupe','moussli','burgger'],
  },
  {
    name: "kodes",
    age: 3,
    favoriteFoods: ['sbaguetti','soupe','cake','frites'],
  },
  {
    name: "kamel",
    age: 40,
    favoriteFoods: ['mossli','pizza'],
  }],(err,data)=>{
    try{
        console.log('the new data has ben aded successfely')

    }catch(error){
        console.log(error)
    }
  })

/* {*************************************************************************************} */
 
//READ 
//find
Person.find({name:'kamel'},(err,data)=>{

    try{
        console.log(data);
    }catch(error){
        console.log('error')
    }
})
/* {*************************************************************************************} */
//findOne
Person.findOne({favoriteFoods:{$in:['burgger']}},(err,data)=>{
   
    try{
        console.log(data);
    }catch(error){
        console.log('error')
    }
})

/* {*************************************************************************************} */
//findbyid
/Person.findById('615d8a70bd2c462716a232b9',(err,data)=>{

    try{
        console.log(data);
    }catch(error){
        console.log('error')
    }
}) 
/* {*************************************************************************************} */
//findOneandUpdate
Person.findOneAndUpdate({name:{$set:'Imene'}},
{ favoriteFoods:('hamburger')},(err,data)=>{

    try{
        console.log(data);
    }catch(error){
        console.log('error IN THIS CODE HHHHjjjjkkkk')
    }
}) 
/* {*************************************************************************************} */
//Perfor
//deletebyid
 Person.findOneAndRemove({name:'Sarra'},(err,data)=>{

    try{
        console.log('the user has benn deleted succsfely');
    }catch(error){
        console.log('error')
    }
}) 
/* {*************************************************************************************} */
//delete with remove
  

 Person.remove({name:'Imene'},(err,data)=>{

    try{
        console.log('the user has benn deleted');
    }catch(error){
        console.log('error')
    }
})  
 //find withfavoriteFoods
 Person.find({favoriteFoods:{$in:['Pizza']}},(err,data)=>{

    try{
        console.log('the user has benn foundedd');
    }catch(error){
        console.log('error')
    }
})  