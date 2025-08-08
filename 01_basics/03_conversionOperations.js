let score="33abc"
console.log(typeof(score))

let valueInNumber= Number(score)
console.log(typeof valueInNumber)
console.log(valueInNumber)

//"33"=> 33
//"33abc"=> NaN
//TRUE=> 1, FALSE => 0
let booleanloggedin=Boolean(score)
console.log(booleanloggedin)  //if string is empty => false ,string conatin something => true
  
//In operations ,yaha left to right chalta h ,while addtion string dominates 
console.log("1"+ 2)
console.log(1+ "2")
console.log("1"+ 2+2)
console.log(1+2+"2")
console.log("1"+"2"+3+4)

a=3
b=a++
console.log(b)
