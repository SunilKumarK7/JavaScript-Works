//def function_name(param1,param2,..)
//function definition
//return value

function add(num1,num2){
    return num1+num2
}

console.log(add(10,20))

function cube(num){
    return num**3
}
console.log(cube(3))

//create a function maxTwo with two parameters num1 and num2 return largest number

function maxTwo(num1,num2){
    return num1>num2?num1:num2
}

console.log(maxTwo(5,8))

// smartSub(10,5)=>5
// smartSub(5,10)=>5

function smartSub(num1,num2){
    return num1>num2?num1-num2:num2-num1
}

console.log(smartSub(10,5))
console.log(smartSub(5,10))