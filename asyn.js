// Passing function as a argument

setTimeout (myfunction , 3000)

function myfunction () {
    document.querySelector(".async").innerHTML= "Ascyn Example 3000";
}


// Pass Whole Function instead of Passing function as a argument

setTimeout (function() {
    myfunction("Ascyn Example 3000 Whole function")}, 3000
);


function myfunction( value ){
    document.querySelector(".async2").innerHTML= value;
}