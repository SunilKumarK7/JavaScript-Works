var colors=["red","green","blue","yellow"]
// var colorsCopy=colors

// colorsCopy.pop()
// console.log(colors) //[ 'red', 'green', 'blue' ]



// var colorsCopy1=[...colors]// shallow copy [...colors]     ...spread operator
// colorsCopy1.pop()
// console.log(colors) //[ 'red', 'green', 'blue', 'yellow' ]

// var colorsCopy1=[...colors,"cyan","purple"]
// console.log(colorsCopy1) //[ 'red', 'green', 'blue', 'yellow', 'cyan', 'purple' ]

var user={name:"hari",email:"hari@gmail.com",password:"Password@123",isActive:true}

var userCopy={...user}
userCopy.isActive=false
console.log(user)
console.table(userCopy)


var product={id:1,name:"m32",brand:"samsung",price:12000,isAvailable:false}

var productCopy={...product,isAvailable:true}
console.log(productCopy)
