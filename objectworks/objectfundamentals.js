// var mobile={
//     name:"one plus nord2t",
//     brand:"one plus",
//     price:"30000",
//     netWork:"5g"
// }

var employee={
    name:"vijay",
    department:"hr",
    salary:10000,
    pace:"kakkanad",
    points:10
}
// class Employee{
//     setEmployee(name,department,salary,place){
//         this.name=name
//         this.department=department
//         this.salary=salary
//         this.place=place
//     }
// }

// console.log(employee.name)
// employee.age=24
// console.log(employee)

// if ("total" in employee){
//     console.log("present")
// }
// else{
//     console.log("not present")
// }

if ("points" in employee){
    employee.points+=10
}
else{
    employee.points=15
}

console.log(employee);