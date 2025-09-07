
food = ['pizza', 'burger', 'pasta', 'sushi', 'taco', 'salad', 'steak', 'sandwich', 'fries', 'noodles'];
animals = ['elephant', 'giraffe', 'kangaroo', 'dolphin', 'penguin', 'alligator', 'crocodile', 'rhinoceros', 'hippopotamus', 'chimpanzee'];
countries = ['brazil', 'canada', 'france', 'germany', 'italy', 'japan', 'mexico', 'norway', 'spain', 'sweden'];
fruits = ['apple', 'banana', 'cherry', 'date', 'fig', 'grape', 'kiwi', 'lemon', 'mango', 'orange'];
let words = [];
const category = localStorage.getItem("Category");
if (category === "Food") {
    words = food;
} else if (category === "Animal") {
    words = animals;
} else if (category === "countries") {
    words = countries;
} else if (category === "fruits") {
    words = fruits;
}
letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let randomIndex = Math.floor(Math.random() * words.length);
let selectedWord = words[randomIndex];
let answerArray = [];
for (let i = 0; i < selectedWord.length; i++) {
    answerArray[i] = "_";
}
const worddisplay = document.querySelector("#word-display");
const letterdisplay = document.querySelector("#keyboard");
const message = document.querySelector("#message");
const resetbtn = document.querySelector("#reset-button");
const newWordBtn = document.querySelector("#new-word-button");
let remainingLetters = selectedWord.length;
let attempts = 6;
let wrongGuesses = 0;
for (let i = 0; i < letters.length; i++) {
    let letterButton = document.createElement("button");
    letterButton.classList.add("btn", "btn-primary", "btn-lg", "m-2");
    letterButton.innerHTML = letters[i];
    letterdisplay.appendChild(letterButton);
    letterButton.addEventListener("click", function () {
        let letter = letterButton.innerHTML;
        letterButton.disabled = true;
        let correctGuess = false;
        for (let j = 0; j < selectedWord.length; j++) {
            if (selectedWord[j] === letter) {
                answerArray[j] = letter;
                remainingLetters--;
                correctGuess = true;
                console.log(answerArray);
            }
        }
        if (!correctGuess) {
            attempts--;
            wrongGuesses++;
            const parts = document.querySelectorAll(
                ".head, .body, .arm.left, .arm.right, .leg.left, .leg.right"
            );
            if (wrongGuesses <= parts.length) {
                parts[wrongGuesses - 1].style.display = "block";
            }
        }
        worddisplay.innerHTML = answerArray.join(" ");
        message.innerHTML = "You have " + attempts + " attempts remaining.";
        if (remainingLetters === 0) {
            message.innerHTML = "Congratulations! You've guessed the word: " + selectedWord;
            disableAllButtons();
        } else if (attempts === 0) {
            message.innerHTML = "Game Over! The correct word was: " + selectedWord;
            disableAllButtons();
        }
    });


}
function disableAllButtons() {
    let buttons = letterdisplay.querySelectorAll("button");
    buttons.forEach(button => button.disabled = true);
} resetbtn.addEventListener("click", function () {
    location.reload();
});

newWordBtn.addEventListener("click", function () {
    window.location.href = "index.html";
});

function resetGame() {
    location.reload();
}



worddisplay.innerHTML = answerArray.join(" ");
worddisplay.style.fontSize = "50px";
worddisplay.style.letterSpacing = "10px";
worddisplay.style.fontWeight = "bold";
