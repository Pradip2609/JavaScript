console.log("=========Assignment4========")
console.warn("1. Get Month Name given Month Number ");

function getMonthName(num){
    var month;    //Create a local variable to hold the string
    switch(num)
    {
      case 1:
        month="January";
        break;
      case 2:
        month="February";
        break;
      case 3:
        month="March";
        break;
      case 4:
        month="April";
        break;
      case 5:
        month="May";
        break;
      case 6:
        month="June";
        break;
      case 7:
        month="July";
        break;
      case 8:
        month="August";
        break;
      case 9:
        month="September";
        break;
      case 10:
        month="October";
        break;
      case 11:
        month="November";
        break;
      case 12:
        month="December";
        break;
      default:
        month="Invalid month";
    }
    return month;
  }
  console.log("Number 1 Month Name : ", getMonthName(1));
  console.log("Number 8 Month Name : ", getMonthName(8));
  console.log("Number 10 Month Name : ", getMonthName(10));
  console.log("Number 5 Month Name : ", getMonthName(5));
  console.log("Number 13 Month Name : ", getMonthName(13));
  console.log("Number 7 Month Name : ", getMonthName(7));
  console.log("Number 6 Month Name : ", getMonthName(6));
  console.log("Number 4 Month Name : ", getMonthName(4));

