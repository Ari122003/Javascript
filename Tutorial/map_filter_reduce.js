
let a=[1,2,3,4,5,6,7,8,9]

let b= a.map((item)=>{

return item*item

})


// console.log(b)

let c= a.filter((item)=>{

if(item%2==0)
{
    return item
}

})

// console.log(c)


let d= a.reduce((a,b)=>{

return a+b

})

// console.log(d)


let add=(item)=>
{
    return item+1
}

let e= a.map(add)

// console.log(e)