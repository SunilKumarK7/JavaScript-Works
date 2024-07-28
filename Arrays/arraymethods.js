// // // Array methods
// // /*
// // class Array{
// //     push(object){}
// //     unshift(object){} add object to the beginning
// //     pop()
// //     shift() remove the element from starting
// //     includes(object)  
// // }
// // */

// // var colors=["red","green","blue"]
// // console.log(colors.includes("red")) //true
// // console.log(colors)

// // colors.push("yellow")
// // console.log(colors)  //colors=["red","green","blue","yellow"]

// // colors.unshift("Black")
// // console.log(colors) //colors=["Black","red","green","blue","yellow"]


// // colors.pop()
// // console.log(colors) //colors=["Black","red","green","blue"]

// // colors.shift()
// // console.log(colors) //colors=["red","green","blue"]

// var arr=[12,13,14,15,16,17]
// //add 2
// var result=arr.map((num)=>num+2)
// console.log(result)

// //squares

// var square=arr.map((num)=>num**2)
// console.log(square)

// //cubes

// var cube=arr.map((num)=>num**3)
// console.log(cube)

// // if num<12 num-1
// // if num>12 num+1

// var nnnn=arr.map((num)=>num<12?num-1:num>12?num+1:num)
// console.log(nnnn)

var arr=[10,11,12,13,14,15,16]

// var product=arr.reduce((n1,n2)=>n1+n2)
var product=arr.reduce((n1,n2)=>n1*n2)
console.log(product) //57657600

//maximum number
var maxNum=arr.reduce((n1,n2)=>n1>n2?n1:n2)
console.log(maxNum) //16

//minimum number
var minNum=arr.reduce((n1,n2)=>n1<n2?n1:n2)
console.log(minNum) //10

//total

var total=arr.reduce((n1,n2)=>n1+n2)
console.log(total) //91

