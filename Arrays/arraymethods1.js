var arr=[20,10,11,12,13,14,15,16]
arr.sort()

console.log(arr)

//obj1=> first parameter return -1
// second parameter

// function compare(obj1,obj2){
    /*if (obj1<obj2){
        return -1
    }
    else{
        return 1
    } */
//     return obj1<obj2?-1:1
// }
// arr.sort(compare)

arr.sort((obj1,obj2)=>obj1<obj2?-1:1)
console.log(arr)

//descending order
arr.sort((obj1,obj2)=>obj2-obj1)
console.log(arr) //[20, 16, 15, 14,13, 12, 11, 10]

//ascending order

arr.sort((obj1,obj2)=>obj1-obj2)
console.log(arr)


//forEach()
//find()
//sum()
//every()
