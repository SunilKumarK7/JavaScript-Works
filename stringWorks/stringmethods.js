// string methods
    // charAt(index) return character at specified index
    //indexOf()
    //toUpperCase()
    //endsWith()
    //includes()
    //slice(start,end)
    //split()
    
var text="javascript"

console.log(text.charAt(2)) //v

console.log(text.indexOf("sc")) //4
console.log(text.indexOf("c")) //5
console.log(text.toUpperCase()) // JAVASCRIPT
console.log(text.toLowerCase()) // javascript
console.log(text.startsWith("ja")) //true
console.log(text.endsWith("pt")) //true
console.log(text.includes("scr")) //true
console.log(text.slice(0,3)) //jav ----------(0,1,2)
console.log(text.split(" "))