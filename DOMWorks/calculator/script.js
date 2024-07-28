var pointFrequency=1
function displayNumber(event){
    const operators=["+","-","*","/","."]

    let textBox=document.querySelector("#result")
    //extract current expression
    let currentExpression=textBox.value;

    //extract displayNumber
    let displayNumber=event.target.value
    if (displayNumber=="." && pointFrequency==1){
        pointFrequency=0
    }
    else if(displayNumber=="." && pointFrequency==0){
        return
    }
    
    if (operators.includes(displayNumber) && displayNumber!="."){
        pointFrequency=1
    }
    //extract last character from current Expression
    let currExpLastChar=currentExpression.slice(-1)
    
    // check for displayNumber and  currExpLastChar are operators
    if (operators.includes(displayNumber) && operators.includes(currExpLastChar)){
        //remove the last character from currentExpression
        currentExpression=currentExpression.slice(0,-1)
    }
    // append the displayNumber with currentExpression
    textBox.value=currentExpression+displayNumber
}

function clearBox(){
    document.querySelector("#result").value=""
}

function evaluateExpression(){
    let currentExpression=document.querySelector("#result").value;
    let result=eval(currentExpression) // type <number>

    //pointFrequency=1
    if (result.toString().split("").includes(".")){
        pointFrequency=0
    }
    else{
        pointFrequency=1
    }
    document.querySelector("#result").value=result
    
}

function backSpace(){
    let currentExpression=document.querySelector("#result").value
    let result=currentExpression.slice(0,-1)
    document.querySelector("#result").value=result
}