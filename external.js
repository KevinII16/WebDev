function guessNumberGame() {
    let btn = document.getElementById('btn');
    let output = document.getElementById('outputtext');

    let number = Math.floor(Math.random() * 100);

    btn.addEventListener('click', function() {
        let input = parseInt(document.getElementById('userinput').value);

        if (input === number) {
            output.innerHTML = `You guessed right, your number was ${number}.`;
        } else if (input < number) {
            output.innerHTML = "You guessed too low!";
        } else if (input > number) {
            output.innerHTML = "You guessed too high!";
        }
    });
}

// Call the function when the DOM is fully loaded
document.addEventListener('DOMContentLoaded', guessNumberGame);
