var weightInKg=70;
var heightInCm=170;


//BMI=(weightInKg/(heightInMeter**2))

var heightInMeter=heightInCm/100
var bmi=Math.round((weightInKg/(heightInMeter**2)))

console.log("BMI=",bmi)


/*class Math{
    round(){

    }
} */

if (bmi<19){ 
    console.log("Underweight")
}
else if(bmi<25){
    console.log("Normal Weight")
}

else if(bmi<30){
    console.log("Overweight")
}

else if(bmi>=30){
    console.log("Obese")
}