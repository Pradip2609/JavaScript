console.log("String Template ")

console.log(`1 ==> My dream company is "Microsoft" `);
var hobby1="Playing Cricket";
var hobby2="Listen Music";
var hobby3="Swimming";
console.log(`2.1 ==> My Hobbies are : `);
console.log(hobby1);
console.log(hobby2);
console.log(hobby3);
var concat1 = hobby1.concat(', ',hobby2.concat(', ',hobby3));
console.log(`2.2 ==> My Hobbies are : `,concat1 );

var number1=500;
var number2=700;
console.log("3 ==> Swap two variables without using third variables");
console.log(`3.1 ==> Before Swapping : ${number1}  ${number2}`);
number1=number1+number2; //500 +700 =1200
number2=number1-number2; //1200-700=500;
number1=number1-number2; //1200-500=700
console.log(`After Swapping : ${number1} ${number2}`);
