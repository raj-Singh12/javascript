const colors = ["Green", "Red", "Yellow"];
const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", function() {
    const randomColor = getRandomColor();
    document.getElementById("main").style.backgroundColor = colors[randomColor];
    color.textContent = colors[randomColor];
})

function getRandomColor() {
    return Math.floor(Math.random() * colors.length)
}

// Note:
// The Math.floor() function returns the largest integer less than or equal to a given number.
// The Math.random() function returns a floating-point, pseudo-random number in the range 0 to less than 1 (inclusive of 0, but not 1) with approximately uniform distribution over that range — which you can then scale to your desired range. The implementation selects the initial seed to the random number generation algorithm; it cannot be chosen or reset by the user.

