/*var number=17

for (i=2;i<=number;i++){
    var num=0
    for(j=2;j<=i;j++){
        if (i%j==0){
            num+=1
            }
        }
    if (num==1){
        console.log(i)
    }
} */

var number=3;
var isPrime=true;

for (let i=2;i<=number;i++){
    if(number%i==0){
        isPrime=false
        break
    }
}

console.log(isPrime)