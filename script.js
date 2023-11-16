function checkOddEven(number) {
    return number % 2 === 0 ? "Even" : "Odd";
}

// Event listener for the Start button
document.getElementById("game-status-btn").addEventListener("click", function() {
    var targetNumber = parseInt(document.getElementById("target-box").value);

    if (!isNaN(targetNumber)) {
        var result = checkOddEven(targetNumber);
        document.getElementById("guess-display").innerText = "The number is " + result + ".";
        document.getElementById("game-controls").style.display = "block";
    } else {
        alert("Invalid input. Please enter a valid number.");
    }
});

// Event listener for the Correct button
document.getElementById("correct-btn").addEventListener("click", function() {
    document.getElementById("end-msg-display").innerText = "Congratulations! You guessed it right!";
});

// Event listener for the Too Low button
document.getElementById("too-low-btn").addEventListener("click", function() {
    document.getElementById("end-msg-display").innerText = "Try a higher number!";
});

// Event listener for the Too High button
document.getElementById("too-high-btn").addEventListener("click", function() {
    document.getElementById("end-msg-display").innerText = "Try a lower number!";
});