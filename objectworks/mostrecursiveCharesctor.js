var text="pneumonoultramicroscopicsilicovolcanoconiosis"
var cc1={}

text.split("").map(ch=>ch in cc1?cc1[ch]+=1:cc1[ch]=1)
console.log(cc1)

var nestedArray=Object.entries(cc1)
console.log(nestedArray)

var mostRecChar=nestedArray.reduce((o1,o2)=>o1[1]>o2[1]?o1:o2)
console.log(mostRecChar)
// var cc={}
// for (let ch of text){
//     if (ch in cc){
//         cc[ch]+=1
//     }
//     else{
//         cc[ch]=1
//     }
// }
// console.log(cc)