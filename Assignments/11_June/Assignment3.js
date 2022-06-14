console.log("=========Assignment3========")
console.warn("1. Design Marriage Eligibility System ");

function checkEligibility(gender,age)
{
    if(gender=="Male" ||gender=="Other")
    {
        if(age>=21)
        {
            return `Gender  ${gender}  ${age} is Eligibility for Marriage`
        }
        else
        {
            return `Gender ${gender} ${age} is NOT Eligibility for Marriage`

        }
    }else if(gender=="Female")
    {
        if(age>=18)
        {
            return `Gender ${gender} ${age} is Eligibility for Marriage`
        }
        else
        {
            return `Gender ${gender} ${age} is NOT Eligibility for Marriage`

        }
        
    }
    else{
        return `Trans Gender`;
    }
    

}
console.log(checkEligibility("Male",17));
console.log(checkEligibility("Male",25));
console.log(checkEligibility("Female",28));
console.log(checkEligibility("Female",16));
console.log(checkEligibility("Other",35));
console.log(checkEligibility("Other",41));