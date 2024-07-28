var year=2000

//print leap year if year is leap year else print not a leap year

//if year is a century year then it is divisible by 400
// if year is not century year then it is divisible by 4
//if above both condition is true then year is a leap year

if ((year%100==0 && year%400==0 || year%100!=0 && year%4==0)){
    console.log(year,"is leap year")
}
else{
    console.log(year,"is not leap year")
}