var items={potato:45,tomato:50,ginger:250,garlic:300,onion:35}

//[["potato",45],[]]

//costly item
//nested array

//Objects.entries(object)  [[],[],[]]

var nestedArray=Object.entries(items)
console.log(nestedArray)

var costly=nestedArray.reduce((p1,p2)=>p1[1]>p2[1]?p1:p2)
console.log(costly)  //[ 'garlic', 300 ]

var lowest=nestedArray.reduce((p1,p2)=>p1[1]>p2[1]?p2:p1)
console.log(lowest) //[ 'onion', 35 ]