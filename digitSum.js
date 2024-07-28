var number=153;

var total=0

while(number!=0){
    let digit=number%10
    total+=digit

    number=Math.floor(number/10)
}

console.log("total=",total)