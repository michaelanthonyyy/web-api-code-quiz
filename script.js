var timeEl = document.querySelector(".timer");
var startEl = document.querySelector(".start-page");
var questionsEl = document.querySelector(".questions");
var endEl = document.querySelector(".end-game");
var clearEl = document.querySelector(".clear");

var quizQuestions = [
    {question: "Who played Jim's love interest that eventually became the regional manager of the Uitca Branch ?",
    answers: { a: "Carol Stills",
    b: "Pam Beesly",
    c: "Karen Filippelli"},
    correctAnswer: "c" }, 

    {question: "What did Prison Mike say the worst part about prison was?",
    answers: { a: "The prison guards",
    b: "The DEMENTORS",
    c: "No freedom" }, 
    correctAnswer: "b" },

    {question: "Which song was played while everyone danced down the aisle at Pam and Jim's Wedding?",
    answers: { a: "Chris Brown - Forever",
    b: "Bruno Mars - Marry You",
    c: "Jagged Edge - Meet Me At The Alter"},
    correctAnswer: "a" },

    {question: "Which two characters 'dueled' over Angela?",
    answers: { a: "Ryan and Michael",
    b: "Dwight and Andy",
    c: "David Wallace and Robert California"},
    correctAnswer: "b" },

    {question: "What kind of van did the Michael Scott Paper Company drive?",
    answers: { a: "Chrysler Sebring",
    b: "Old Korean Scranton Hallelujah Church",
    c: "Meridith's van"},
    correctAnswer: "b"},
]



//clear button on highscores.html clears local storage for previous high scores
clearEl.addEventListener("click", function () {
    localStorage.clear();
})

// create varaibles to shorthand queryselector
var secondsLeft = 90;

function timer() {
    var timerInterval = setInterval(function() {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

