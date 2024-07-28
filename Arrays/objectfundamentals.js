// var mobile={
//     name:"OnePlus Nord2t",
//     brand:"one plus",
//     price:34000,
//     network:"5g"
// }

// var employee={
//     name:"vijay",
//     department:"hr",
//     salary:10000,
//     place:"kakkanad"
// }

var students={
    name:"Sunil",
    course:"django",
    degree:"BTech",
    total:3000
}

// console.log(students.name)

// console.log(students.course)

// students.grade="A+"

// console.log(students)

if ("total" in students){
    console.log("present")
}
else{
    console.log("not")
}


// if points exists add 10 extra points with current point else add points as 15

if ("points" in students){
    students.points+=10
}
else{
    students.points=15
}

console.log(students)