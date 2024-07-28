var arr=["program","project","profile","profession","python","django","dog","cat"]

arr.sort((w1,w2)=>w1.length-w2.length)
console.log(arr)

arr.sort((w1,w2)=>w2.length-w1.length)
console.log(arr)

// // longest word

// var longestWord=arr.reduce((n1,n2)=>n1.length>n2.length?n1:n2)
// console.log(longestWord)

// //shortestWord
// var shortestWord=arr.reduce((n1,n2)=>n1.length<n2.length?n1:n2)
// console.log(shortestWord)

// //convert all objects to upper case


// var upperCaseString=arr.map(word=>word.toUpperCase())
// console.log(upperCaseString)

// // print length of each string object in the array

// var lengthOfString=arr.map(word=>word.length)
// console.log(lengthOfString)

// // return words starting with "pro"

// var proStratingWords=arr.filter(word=>word.startsWith("pro"))
// console.log(proStratingWords)
// var proStratingWords=arr.filter(word=>word.includes("pro"))
// console.log(proStratingWords)

