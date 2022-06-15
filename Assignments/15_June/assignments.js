const friends = ["Uday","Nitin","Shounak","Nihal","Kiran","Balaji"];

console.log(friends);
console.log(typeof friends);
console.log(`Length of array : ${friends.length}`);

console.log("======== Accessing array elements========");
let firstElement = friends[0]
console.log(`First element : ${firstElement}`);

console.log("======== Accessing array Third elements========");
let thirdElement = friends[3]
console.log(`Third element : ${thirdElement}`);

console.log("======== Accessing of Last elements========");
let lastelement = friends[friends.length-1]
console.log(`Last element : ${lastelement}`);


console.log("======== Updating elements========");
friends[4]="Sachin";
console.log(`Elements : ${friends[4]}`)


console.log("======== Log All Elements ========");
for(let i=0;i<friends.length;i++)
{
    console.log(friends[i]);
}

console.log("======= indexOf() =========");
let indexOf12 = friends.indexOf("Nitin");
console.log(`Index of Element Nitin : ${indexOf12}`);

console.log("======= Add element to the last position =========");
friends.push("Sangaram");
friends.push("Parvej");
console.log(friends);

console.log("======= Remove element from the last position =========");
friends.pop();
console.log(friends);

console.log("======= Remove element from the first position =========");
friends.shift();
console.log(friends);

console.log("======= Add element to the first position =========");
friends.unshift("Kiran");
console.log(friends);







