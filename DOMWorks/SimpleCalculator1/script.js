
function handleClick(event){
    let operator=event.target.value;
    let num1=box1.value;
    let num2=box2.value;
    let result=eval(`${num1}${operator}${num2}`)
    document.querySelector("#root").innerHTML=result
    // if(operator=="+"){
    //     result=num1+num2;
    //     document.querySelector("#root").innerHTML=`${num1}+${num2}=${result}`
    // }
    // else if(operator=="-"){
    //     result=num1-num2;
    //     document.querySelector("#root").innerHTML=`${num1}-${num2}=${result}`
    // }
    // else if(operator=="x"){
    //     result=num1*num2
    //     document.querySelector("#root").innerHTML=`${num1}x${num2}=${result}`
    // }
    // else if(operator=="÷"){
    //     result=num1/num2
    //     document.querySelector("#root").innerHTML=`${num1}÷${num2}=${result}`
    // }
}