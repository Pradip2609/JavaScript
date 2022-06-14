console.log("=========Assignment1========")
console.warn("1. Check number Even or ODD");

function checkEvenODD(numberToCheck) {
    if (numberToCheck % 2 == 0) {
        console.log(`This Number is EVEN : ${numberToCheck} `);

    }
    if (numberToCheck % 2 != 0) {
        console.log(`This Number is ODD : ${numberToCheck} `);
    }
}
checkEvenODD(45);
checkEvenODD(70);
checkEvenODD(67);
checkEvenODD(98);

console.warn("2. Check Person eligible for voting ");

function checkVoteEligible(age) {
    if (age >= 18) {
        console.log(`Age ${age } is Eligible for vote.`);
    }
    if (age < 18) {
        console.log(`Age ${age } is Not Eligible for vote.`);
    }

}
checkVoteEligible(18);
checkVoteEligible(20);
checkVoteEligible(17);
checkVoteEligible(47);

console.warn("3. Check if String Contains more than 10 Character ");
function checkLength(stringlen)
{
    if((stringlen).length>10)
    {
        console.log(`String "${stringlen}" Contains more than 10 Character.`);       
    }
}
checkLength("JavaScript - ES6");

console.warn("4. Check if String Starts with JAVA ");
function checkStartwith(stringlen)
{
    if((stringlen).startsWith("Java"))
    {
        console.log(`String "${stringlen}" Start with JAVA`);       
    }
}
checkStartwith("JavaScript Language");

console.warn("5. Check Number is Even");
function isEvenOrOdd(numberToCheck){
    if (numberToCheck % 2 == 0){
        console.log(`Yes ${numberToCheck} is EVEN`);
    }
    if (numberToCheck % 2 != 0){
        console.log(`Yes ${numberToCheck} is ODD`);
    }
}
isEvenOrOdd(2022);
console.warn("6. Check Number is ODD");
isEvenOrOdd(123);