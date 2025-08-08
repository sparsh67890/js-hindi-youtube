/* Primitive
 7 types : String,Number,null,undefined,Symbol,BigInt */

/* refrence (non primitive)
 array,objects,functions */

 const id= Symbol("123")
 const anotherId= Symbol("123")
//both have same value but will have diffrent id
console.log(id===anotherId)

const heros= ["shaktiman","neeraj","dog"]
let myobj ={
    name: "hitesh",
    age:22,
}

const myfunction=function(){
    console.log("hello world")
}
console.log(myfunction)