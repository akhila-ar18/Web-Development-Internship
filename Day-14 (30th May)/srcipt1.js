
var  n1 = 12;
var n2 = 1;
var n3 = 6;
let text1 = "Almapod";
let text2 = "Internship";

document.getElementById("add").innerHTML = n1 + n2;

document.getElementById("subtract").innerHTML = n1 - n2;

document.getElementById("multiply").innerHTML = n1 * n2;

document.getElementById("divide").innerHTML = n1 / n2;

document.getElementById("remainder").innerHTML = n1 % n2;

document.getElementById("increment").innerHTML = ++n3;

document.getElementById("decrement").innerHTML = --n1;
n2 += 7;
document.getElementById("add_assign").innerHTML = n2;
n1 -= 8;
document.getElementById("sub_assign").innerHTML = n1;
n3 *= -3;
document.getElementById("multiply_assign").innerHTML = n3;
n2 /= 4;
document.getElementById("divide_assign").innerHTML = n2;

document.getElementById("concatenate").innerHTML = text1 +" "+ text2;
