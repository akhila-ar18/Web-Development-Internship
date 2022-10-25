//SWITCH CASE
let day = new Date().getDay();
let today = " ";
switch(day)
{
    case 0: console.log("Today is Sunday"); break;
    case 1: console.log("Today is Monday"); break;
    case 2: console.log("Today is Tuesday"); break;
    case 3: console.log("Today is Wednesday"); break;
    case 4: console.log("Today is Thursday"); break;
    case 5: console.log("Today is Friday"); break;
    case 6: console.log("Today is Saturday"); break;
    default: console.log("Invalid Day!! Please enter a valid day"); break;
}

//FOR-LOOP
for(let i = 0 ; i <= 5 ; i++)
    console.log(i);
let result = " ";
for(let i = 0 ; i < 10 ; i++)
    result += i;
console.log(result);

//CLASS
let camera = {
    brand : "Canon",
    price : 40000,
    color : "Black",
    mfg : 2019
};
console.log(camera);

//ARROW FUNCTION
var add = (a,b)=>a+b;
console.log(add(18,-5));
