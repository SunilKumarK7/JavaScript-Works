var arr=[10,20,30,40]

var k=2

for(let i=0;i<=k;i++){
    let poped_elemet=arr.pop()
    
    arr.unshift(poped_elemet)
    
}

console.log(arr)