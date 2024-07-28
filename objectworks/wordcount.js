var text="hello hai hello hai hello hello"



var words=text.split(" ")
console.log(words)
var wc={}

text.split(" ").map(ch=>ch in wc?wc[ch]+=1:wc[ch]=1)
console.log(wc)
// for (let ch of words){
//     if(ch in wc){
//         wc[ch]+=1
//     }
//     else{
//         wc[ch]=1
//     }
// }
// console.log(wc)