var previous=0
var current=1

console.log(previous,current)

for(i=1;i<=10;i++){
    let next=previous+current
    console.log(previous,"+",current,"=",next)
    previous=current
    current=next
} 