// var words=["fly","flyoff","flyin","flyout"]


// arrow function

//map()
//filter()
//reduce() sum,max,min 
//sort()
//some()
//find()
//forEach()

var arr=[12,13,14,15,16,17]

function cube(num){
    return num**3
}

var result=arr.map(cube)
console.log(result)

function addFive(num){
    return num+5
}

var addFive=arr.map(addFive)
console.log(addFive)