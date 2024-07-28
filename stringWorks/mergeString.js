var str1="ABC"

var str2="pqr"

// ApBqCr

var string1=str1.split("")
console.log(string1)
var string2=str2.split("")
console.log(string2)

var mergedString=""
for (i=0;i<str1.length;i++){
    mergedString+=(str1[i]+str2[i])
}

console.log(mergedString)