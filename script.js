var timeEl = document.querySelector(".timer");
var startEl = document.querySelector(".start-button");
var questionsEl = document.querySelector(".questions");
var endEl = document.querySelector(".end-game");
var clearEl = document.querySelector(".clear");
var secondsLeft = 90;
var questionId = 0;

var quizQuestions = [
    {
        question: "Who played Jim's love interest that eventually became the regional manager of the Utica Branch ?",
        answers: ["Carol Stills", "Pam Beesly", "Karen Filippelli"],
        correctAnswer: "Karen Filippelli"
    },

    {
        question: "What did Prison Mike say the worst part about prison was?",
        answers: ["The prison guards", "The DEMENTORS", "No freedom"],
        correctAnswer: "The DEMENTORS"
    },

    {
        question: "Which song was played while everyone danced down the aisle at Pam and Jim's Wedding?",
        answers: ["Chris Brown - Forever", "Bruno Mars - Marry You", "Jagged Edge - Meet Me At The Alter"],
        correctAnswer: "Chris Brown - Forever"
    },

    {
        question: "Which two characters 'dueled' over Angela?",
        answers: ["Ryan and Michael", "Dwight and Andy", "David Wallace and Robert California"],
        correctAnswer: "Dwight and Andy"
    },

    {
        question: "What kind of van did the Michael Scott Paper Company drive?",
        answers: ["Chrysler Sebring", "Old Korean Scranton Hallelujah Church", "Meridith's van"],
        correctAnswer: "Old Korean Scranton Hallelujah Church"
    },
]


function timer() {
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            sendMessage();
        }
    }, 1000);
}

function questionNumber() {
    var pEl = document.createElement("p");
    pEl.textContent = quizQuestions[questionId].question;
    questionsEl.appendChild(pEl);
    for (i = 0; i < quizQuestions[questionId].answers.length; i++) {
        var button = document.createElement("button");
        button.textContent = quizQuestions[questionId].answers[i];
        button.setAttribute("value", quizQuestions[questionId].answers[i]);
        button.addEventListener("click", function () {
        });
        questionsEl.appendChild(button);
    }
    questionId++;
    if (button.value === questionsNumber[questionId].correctAnswer) {
        questionId++;
    } else {
        wrongAnswer();
        questionId++;
    }

}


startEl.addEventListener("click", function () {
    timer();
    startEl.style.visibility = 'hidden';
    questionNumber();
}
)
// button.addEventListener("click", stylePage);

function wrongAnswer() {
    secondsLeft - 15;
}

// endEl.style.visibility = 'hidden';



clearEl.addEventListener("click", function () {
    localStorage.clear();
})
//function timer() should start after pressing Start Quiz on splash page
//timer should also subtract time for any incorrect answers
//splash page message should be replaced by questions and possible answers
//after each question display next question and answer set along with if the previous question was correct or