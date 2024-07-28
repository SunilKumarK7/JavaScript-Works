var fullName="john doe"

//firstname
//lastname

var firstName=fullName.slice(0,fullName.indexOf(" "))
console.log(firstName)

var lastName=fullName.slice(fullName.indexOf(" ")+1)
console.log(lastName)