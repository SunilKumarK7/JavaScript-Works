var word="hellopython"

var wordCount={}

word.split("").map(ch=>ch in wordCount? wordCount[ch]+=1:wordCount[ch]=1)
console.log(wordCount)

/*for (let ch of word){
    if (ch in wordCount){
        wordCount[ch]+=1
        
    }
    else{
        wordCount[ch]=1
    }
}*/

// for (let ch of word){
//     ch in wordCount?wordCount[ch]+=1:wordCount[ch]=1
// }
// console.log(wordCount)

// // text="ABCDDE"
// //print first recursive character
