console.warn("Calculate Square of Number");
function numberSquare(Number){
    var Square = Number * Number;
    console.log(`1. Square of Number ${Number} : ${Square}`);
}
numberSquare(5);
numberSquare(6);
numberSquare(25);
numberSquare(100);
console.warn("Type Of Function");
console.log("2. Type of Function : ",typeof(numberSquare));

console.warn("Calculate Area of ");
function areaofSqaure(base,height){
    var num = (base*height)/2;
    return num;
}
var area = areaofSqaure(45,34);
console.log("3. Area of Triangle : ",area);

console.warn("Check number is Positive or Negative");
function checkNumber(num){
    var num1  =  num > 0 ?  "Positive" : num<0?'Negative':'Zero'
    return num1;
}
var a=-56;var b=0.567;var c = 890;var d=00
var a1 = checkNumber(a);
console.log(`4.1 ${a} Number is : ${a1} `);
var b1 = checkNumber(b);
console.log(`4.2 ${b} Number is : ${b1} `);
var c1 = checkNumber(c);
console.log(`4.3 ${c} Number is : ${c1} `);
var d1 = checkNumber(d);
console.log(`4.4 ${d} Number is : ${d1} `);

function largestAmountThree(num1,num2,num3){
    var num = num1 > num2 ? `${num1} is Largest`  : num3>num2 ? `${num3} is Largest` :`${num2} is Largest`
    return num;   
}
console.warn("Find Largest value Among Three");
var lar = largestAmountThree(679,867,956);
//var lar1 = largestAmountThree(3,2,1);
//var lar2 = largestAmountThree(1,4,3);
console.log(`5. ${lar}`);
//console.log(lar1);
//console.log(lar2);
var lar = largestAmountThree(679,867,956);

console.warn("Check variable is Null or Undefined");

function checkValueNull(){
    //var num = value == undefined ? `value is undefined`  : value==null ? `value is null` : ``
    
    
    var fname = undefined;
    var ch = typeof(fname);
    var num = `6.1 Given value fname is : ${fname} and type of  : ${ch}` ;
    console.log(num);
    
    var address = null;
    var ch = typeof(address);
    var num = `6.2 Given value address is : ${address} and type of  : ${ch}` ;
    console.log(num);

    var isGirlBeautiful = "yes";
    var ch = typeof(isGirlBeautiful);
    var num = `6.3 Given value is GirlBeautiful is : ${isGirlBeautiful} and type of  : ${ch}` ;
    console.log(num);
    //return num;   
}
checkValueNull(); 

console.warn("Check Leap year");

function checkLeapYear(num){
    var ch = num%4==0 ? `7 Given value ${num} is Leap Year ` : `Given value ${num} is Not Leap Year`;
    return ch;
}
console.log('7.1 ' , checkLeapYear(2020));
console.log('7.2 ' , checkLeapYear(1999));
console.log('7.3 ' , checkLeapYear(2022));