var timeEl = document.querySelector(".timer");
var startEl = document.querySelector(".start-button");
var questionsEl = document.querySelector(".questions");
var endEl = document.querySelector(".end-game");
var clearEl = document.querySelector(".clear");


var quizQuestions = [
    {question: "Who played Jim's love interest that eventually became the regional manager of the Utica Branch ?",
    answers: ["Carol Stills", "Pam Beesly", "Karen Filippelli"],
    correctAnswer: "Karen Filippelli" }, 

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

startEl.addEventListener("click", function(){
    timer ();
    startEl.style.visibility = 'hidden';
    // console.log(quizQuestions[0].question);
    // console.log(quizQuestions[0].answers[0]);
    var pEl = document.createElement("p");
    pEl.textContent= quizQuestions[0].question;
    questionsEl.appendChild(pEl);
    for (i=0; i < quizQuestions[0].answers.length; i++){
        var button = document.createElement("button");
        button.textContent = quizQuestions[0].answers[i];
        button.setAttribute("value", quizQuestions[0].answers[i]);
        questionsEl.appendChild(button);
        button.addEventListener("click", stylePage);
}})


//function timer() should start after pressing Start Quiz on splash page
//timer should also subtract time for any incorrect answers
//splash page message should be replaced by questions and possible answers
//after each question display next question and answer set along with if the previous question was correct or