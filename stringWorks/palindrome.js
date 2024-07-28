var text="madam"

var reverseString=text.split("").reverse().join("")
console.log(reverseString)

console.log(text==reverseString?"palindrome":"not palindrome")