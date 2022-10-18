let a = 12, b = 6;

var add = function(a,b){
    return a+b;
}

var subtract = function(a,b){
    return a-b;
}

var multiply = function(a,b){
    return a*b;
}

var divide = function(a,b){
    return a/b;
}

var modulo = function(a,b){
    return a%b;
}

var power = function(a,b){
    return a**b;
}

document.getElementById('add_fun').innerHTML = add(a,b);
document.getElementById('subtract_fun').innerHTML = subtract(a,b);
document.getElementById('multiply_fun').innerHTML = multiply(a,b);
document.getElementById('divide_fun').innerHTML = divide(a,b);
document.getElementById('remainder_fun').innerHTML = modulo(a,b);
document.getElementById('power_fun').innerHTML = power(a,b);
