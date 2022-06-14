console.log("=========Assignment2========")
console.warn("1. Check number Even or ODD");

function checkEvenODD(numberToCheck) {
    if (numberToCheck % 2 == 0) {
        return `This Number is EVEN : ${numberToCheck} `;

    } else {
        return `This Number is ODD : ${numberToCheck} `;
    }
}
console.log(checkEvenODD(2));
console.log(checkEvenODD(45));
console.log(checkEvenODD(null));
console.log(checkEvenODD(13));
console.log(checkEvenODD(0));

console.warn("2. Design a grade system ");

function gradeSystem(numberToCheck) {
    if (numberToCheck < 35) {
        return `Mark  ${numberToCheck} : Failed`;
    } else if (numberToCheck <= 35) {
        return `Mark  ${numberToCheck} : Passed`;
    } else if (numberToCheck >= 35 && numberToCheck < 60) {
        return `Mark  ${numberToCheck} : Grade C`;
    } else if (numberToCheck >= 60 && numberToCheck < 75) {
        return `Mark  ${numberToCheck} : Grade B`;
    } else if (numberToCheck >= 75 && numberToCheck < 90) {
        return `Mark  ${numberToCheck} : Grade A`;
    } else if (numberToCheck >= 90 && numberToCheck <= 100) {
        return `Mark  ${numberToCheck} : Grade A+`;
    } else {
        return `Invalid Number : ${numberToCheck} `;
    }
}
var a = gradeSystem(29);
console.log(a);
var a = gradeSystem(35);
console.log(a);
var a = gradeSystem(60);
console.log(a);
var a = gradeSystem(55);
console.log(a);
var a = gradeSystem(85);
console.log(a);
var a = gradeSystem(96);
console.log(a);
var a = gradeSystem(100);
console.log(a);
var a = gradeSystem(90);
console.log(a);
var a = gradeSystem(101);
console.log(a);



console.warn("3. check the type given argument : ")

function typeofArgument(Num) {
    var dfd = typeof (Num)
    return `Given number ${Num} type of : ${dfd}`;
}
console.log(typeofArgument("50"));
console.log(typeofArgument(100));
console.log(typeofArgument(60.89));
console.log(typeofArgument(null));
console.log(typeofArgument(undefined));
console.log(typeofArgument(NaN));
console.log(typeofArgument("Hello"));
