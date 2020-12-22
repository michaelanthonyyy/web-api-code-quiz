var timeEl = document.querySelector(".timer");
var startEl = document.querySelector(".start-page");
var questionsEl = document.querySelector(".questions");
var endEl = document.querySelector(".end-game");
var quizQuestions = [{
    question: "Who played Jim's love interest that eventually became the regional manager of the Uitca Branch ?",
    answers: { a: "Carol Stills",
    b: "Pam Beesly",
    c: "Karen Filippelli"},
    answer: "c"
},
]
 
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

