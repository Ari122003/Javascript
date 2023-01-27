 
 
 let p = new Promise(function(resolve,reject){

    setTimeout(function(){

        resolve("Promise is resoleved")

    },3000)



 })



 p.then(function(text){
    console.log(text)
 })

 p.then( function(){
       
    console.log("Successfully")

 })