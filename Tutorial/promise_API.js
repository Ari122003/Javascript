let p1 = new Promise(function(resolve,reject){

         setTimeout(function(){
            resolve("P1 resolved")

            // reject("P1 rejected")
    
         },2000)

})

let p2= new Promise(function(resolve,reject){

    setTimeout(function(){
          resolve("P2 resolved")
        //   reject("P2 rejected")
    },4000)
})

let p3= new Promise(function(resolve,reject){

      setTimeout(function(){
        resolve("P3 resolved")
      },6000)


})


// let all = Promise.all([p1,p2,p3])

// all.then(function(value){   .......Promise.all can handel only reoslved promises
//     console.log(value)
// })


// let settle = Promise.allSettled([p1,p2,p3])

// settle.then(function(value){  ...... Promise.allSettled gives status of all promises
//     console.log(value)
// })


// let race = Promise.race([p1,p2,p3])

// race.then(function(value){      race can handle only the first promise if it is resolved

//     console.log(value)
// })


let any = Promise.any([p1,p2,p3])
                                    //  Promise.any handels the first resolved promiise
any.then(function(value){
    console.log(value)
})