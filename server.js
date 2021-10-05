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
//createmany person
const addmanyPerson = new Person([{

    name: "Sarra",
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
    favoriteFoods: ['souchi','Fruits','crepe','Vegetables'],
  },
  {
    name: "koussay",
    age: 2,
    favoriteFoods: ['milk','soupe'],
  },
  {
    name: "kodes",
    age: 3,
    favoriteFoods: ['sbaguetti','soupe','cake','frites'],
  },
  {
    name: "kamel",
    age: 40,
    favoriteFoods: ['mossli'],
  }]);
  //the save function
  addmanyPerson.save(()=>{
    try{
        console.log('the new data has ben aded successfely')

    }catch(error){
        console.log(error)
    }
}) 
//READ 
//find
Person.find({name:'Imene'},(err,data)=>{

    try{
        console.log(data);
    }catch(error){
        console.log('error')
    }
})
//findOne
Person.findOne({favoriteFoods:'moussli'},(err,data)=>{

    try{
        console.log(data);
    }catch(error){
        console.log('error')
    }
})
//findbyid
Person.findById({_id:'615cde0d9e7fb33d8eb7e4c6'},(err,data)=>{

    try{
        console.log(data);
    }catch(error){
        console.log('error')
    }
})
//findOneandUpdate
Person.findOneAndUpdate({name:'Imene'},
{ favoriteFoods:('hamburger')},(err,data)=>{

    try{
        console.log(data);
    }catch(error){
        console.log('error')
    }
})
//Perfor
//deletebyid
Person.findByIdAndDelete({_id:'615cde1043a3e9666b5f1091'},(err,data)=>{

    try{
        console.log('the user has benn deleted');
    }catch(error){
        console.log('error')
    }
})
//delete with remove
Person.remove({name:'imene'},(err,data)=>{

    try{
        console.log('the user has benn deleted');
    }catch(error){
        console.log('error')
    }
})