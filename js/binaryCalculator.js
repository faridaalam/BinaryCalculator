var operand1 = "";
var operand2 = "";
var operator = "";

var first = true;
var resultViewed= false;

var res = document.getElementById("res");

var zero = document.getElementById("btn0");
// document.getElementById("btn0").addEventListener("click", zeroBtn);

var one = document.getElementById("btn1");
var clear = document.getElementById("btnClr");
var equal = document.getElementById("btnEql");
var plus = document.getElementById("btnSum");
var sub = document.getElementById("btnSub");
var mul = document.getElementById("btnMul");
var div = document.getElementById("btnDiv");

zero.addEventListener("click", zeroBtn);
one.addEventListener("click",oneBtn);
clear.addEventListener("click",clearBtn);
equal.addEventListener("click",equalBtn);
plus.addEventListener("click",plusBtn);
sub.addEventListener("click",subBtn);
mul.addEventListener("click",mulBtn);
div.addEventListener("click",divBtn);



function zeroBtn() {
    if (resultViewed) {
        clearBtn();
    }

    res.innerHTML += "0";
    if (first){
        operand1 += "0" ;
    }else{
        operand2 += "0" 
    }
    
}
    
    
function oneBtn(){
    if (resultViewed) {
        clearBtn();
    }
    res.innerHTML += "1";
    if (first){
        operand1 += "1" ;
    }else{
        operand2 += "1" 
    }
}

function clearBtn(){
    res.innerHTML = "";
    resultViewed = false;
    operand1 = "";
    operand2 ="";
    operator = "";
    first = true;
}

function equalBtn(){
    var op1= parseInt(operand1,2);
    var op2= parseInt(operand2,2);
    var result;
    if (operator == "+"){
        result = op1 + op2;
    } else if (operator == "-"){
        result = op1 - op2;
    } else if (operator == "*"){
        result = op1* op2;
    } else if (operator == "/"){
        result = op1 / op2;
    }

    res.innerHTML = result.toString(2);
    resultViewed = true;

}

function plusBtn(){
    if (resultViewed) {
        operand1 = res.innerHTML;
        operand2 = "";
        resultViewed = false;
    }
    res.innerHTML += "+";
    operator = "+";
    first = false;
}
function subBtn(){
    if (resultViewed) {
        operand1 = res.innerHTML;
        operand2 = "";
        resultViewed = false;
    }
    res.innerHTML += "-";
    operator = "-";
    first = false;
}

function mulBtn(){
    if (resultViewed) {
        operand1 = res.innerHTML;
        operand2 = "";
        resultViewed = false;
    }
    res.innerHTML += "*";
    operator = "*";
    first = false;
}
function divBtn(){
    if (resultViewed) {
        operand1 = res.innerHTML;
        operand2 = "";
        resultViewed = false;
    }
    res.innerHTML += "/";
    operator = "/";
    first = false;
}