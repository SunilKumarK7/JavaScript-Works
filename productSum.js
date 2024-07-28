var number=153;
//3**3=27
//5**3=125
//1**3=3
var original=number
var number_count=String(number).length

console.log(number_count)
var total=0

while(number!=0){
    var digit=number%10;
    total+=(digit**3)

    number=Math.floor(number/10)
}

console.log("total=",total)

console.log(original==total? "armstrong":"not armstrong")