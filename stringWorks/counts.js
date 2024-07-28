var text="pneumonoultramicroscopicsilicovolcanoconiosis"

// vowelCount
//consonantCount 
var vowels="aeiou"
var v_count=0
var c_count=0

text.split("").forEach(ch=>vowels.includes(ch)?v_count+=1:c_count+=1)
/*
for(let ch of text){
    if(vowels.includes(ch)){
        v_count+=1
    }
    else{
        c_count+=1
    }
}
 */

console.log("vowel_count",v_count)
console.log("consonant_count",c_count)
console.log("total_characters",text.length)

// anagram text
var word1="silent"
var word2="listen"


