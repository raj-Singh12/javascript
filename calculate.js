function myDisplay(some) {
    document.querySelector(".demo").innerHTML = some;
}
function myDisplay2(some2) {
    document.querySelector(".demo2").innerHTML = some2;
}
function myCalculator (num1 , num2) {
    let sum = num1 + num2;
    return sum;
}
let result = myCalculator(5, 5);
let result2 = myCalculator(15, 15);
myDisplay(result);
myDisplay2(result2);

//

function myDisplayCallbacks(something) {
    document.querySelector('.callback').innerHTML = something;
}
function myCalculatorCallback (num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
}
myCalculatorCallback(30, 40, myDisplayCallbacks)