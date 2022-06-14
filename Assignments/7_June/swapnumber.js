//number swapping without using third variables

var a =20;
var b=10;

console.log( "Before Swapping a is ",a ,"and b is ",b);

a=a+b;
b=a-b;
a=a-b;

console.log( "After Swapping a is ",a ,"and b is " ,b);