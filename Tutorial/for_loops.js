let sum=0

for(let i=1;i<=5;i++)
{
  sum = sum+i // sum += i
}

// console.log("The sum is", sum)


let roll=
{
  aritra:81,
  jyotishman:39,
  soumyadip:89,
  rabi:86,

}

// for in loop

for(let i in roll)
{
  console.log("Roll of ",i," is ",roll[i])
}

// for of loops

for(i of "Aritra")
{
  console.log(i)
}