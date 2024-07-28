function performAddition(){
    let num1=+document.querySelector("#box1").value
    let num2=+document.querySelector("#box2").value
    let result=num1+num2;
    document.querySelector("#root").innerHTML=num1+"+"+num2+"="+result
}

function performSubtraction(){
    let num1=+box1.value
    let num2=+box2.value
    let result=num1-num2
    document.querySelector("#root").innerHTML=`${num1}-${num2}=${result}`
}

function performMultiplication(){
    let num1=+box1.value
    let num2=+box2.value
    let result="Multiplication Result ="+num1*num2

    document.querySelector("#root").innerHTML=result
}

function performDivision(){
    let num1=+box1.value
    let num2=+box2.value
    let result="Division Result ="+num1/num2
    document.querySelector("#root").innerHTML=result
}