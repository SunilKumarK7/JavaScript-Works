//define[]

var numbers=[10,20]

//list
//dictionary
//set
//tuple

//group of objects manage

//Array[]  preserved, duplicates allowed, mutable

var expenses=[10000,20000,3000]

//console.log(expenses[0])

for (let i=0;i<expenses.length;i++){
    console.log(expenses[i],i)
}

for (let num of expenses){
    console.log(num)
}

expenses[2]=40000
console.log(expenses) //expenses=[10000,20000,40000]


// Array methods
/*
class Array{
    push(object){}
    unshift(object){} add object to the beginning
    pop()
    shift() remove the element from starting
}
*/

var colors=["red","green","blue"]

colors.push("yellow")
console.log(colors)  //colors=["red","green","blue","yellow"]

colors.unshift("Black")
console.log(colors) //colors=["Black","red","green","blue","yellow"]


colors.pop()
console.log(colors) //colors=["Black","red","green","blue"]

colors.shift()
console.log(colors) //colors=["red","green","blue"]