function sayHello(){
    console.log("1. Sachin Tendulkar");
}
sayHello();
// function sayHello1(){
//     console.log("1.1 I Completed MY MCA in Shivaji University");
// }
// sayHello1();

function fWithArguments(firstname,lastname)
{
    console.log(`2. My Name is : ${firstname} ${lastname}`);
}
fWithArguments("Pradip","Daingade");

function fwithreturntype(){
    var str ="I am learning Javascript.";
    console.log("3.1",str," Total word Count : ", getwordcount(str));
}
fwithreturntype();

function fwithreturntype1(){
    var str ="Soon I am going to be IT Champ.";
    console.log("3.2",str," Total word Count : ", getwordcount(str));
}
fwithreturntype1();

function swapusingthirdvariable(str1,str2){
    console.log("4.1 Swap Using Third Variable :")
     console.log("Before Swap : ",str1,str2);
     var temp;
     temp=str1;
     str1=str2;
     str2=temp;
     console.log(" After Swap : ",str1,str2);
 }
 swapusingthirdvariable("Virat","Anushka");
 
 
 
 function swapwithoutusingthirdvariable(str1,str2){
      console.log("4.2 Swap without Using Third Variable :")
      console.log("Before Swap : ",str1,str2);
      str1=str1+str2;
      str2=str1-str2;
      str1=str1-str2;
      console.log(" After Swap : ",str1,str2);
  }
  swapwithoutusingthirdvariable(555,444);

function getwordcount(str){
    return str.split(' ').length;
}
