var timeEl = document.querySelector(".timer");
var startEl = document.querySelector(".start-button");
var questionsEl = document.querySelector(".questions");
var mainEl = document.querySelector(".main-content");
var endEl = document.querySelector(".end-game");
var clearEl = document.querySelector(".clear");
var submitEl = document.querySelector(".submit");
var initialsEl = document.querySelector(".initials");
var wrapperEl = document.querySelector(".wrapper");
var cardEl = document.querySelector(".card-body");
var highScoresButton = document.querySelector(".high-scores");
var secondsLeft = 90;
var questionId = 0;
var answerId = 0;
var timerInterval;
var local = 0;
var quizQuestions = [
    {
        question: "Who played Jim's love interest that eventually became the regional manager of the Utica Branch ?",
        answers: ["A: Carol Stills", "B: Pam Beesly", "C: Karen Filippelli"],
        correctAnswer: "C: Karen Filippelli"
    },

    {
        question: "What did Prison Mike say the worst part about prison was?",
        answers: ["A: The prison guards", "B: The DEMENTORS", "C: No freedom"],
        correctAnswer: "B: The DEMENTORS"
    },

    {
        question: "Which song was played while everyone danced down the aisle at Pam and Jim's Wedding?",
        answers: ["A: Chris Brown - Forever", "B: Bruno Mars - Marry You", "C: Jagged Edge - Meet Me At The Alter"],
        correctAnswer: "A: Chris Brown - Forever"
    },

    {
        question: "Which two characters 'dueled' over Angela?",
        answers: ["A: Ryan and Michael", "B: Dwight and Andy", "C: David Wallace and Robert California"],
        correctAnswer: "B: Dwight and Andy"
    },

    {
        question: "What kind of van did the Michael Scott Paper Company drive?",
        answers: ["A: Chrysler Sebring", "B: Old Korean Scranton Hallelujah Church", "C: Meridith's van"],
        correctAnswer: "B: Old Korean Scranton Hallelujah Church"
    },
]


function timer() {
    timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            questionsEl.style.visibility = 'hidden';
            if (--timer < 0) {
                timer = duration;

            }
        }
    }, 1000);
}

startEl.addEventListener("click", function () {
    timer();
    startEl.style.visibility = 'hidden';
    questionNumber();
}
)


function questionNumber() {
    var pEl = document.createElement("p");
    pEl.textContent = quizQuestions[questionId].question;
    questionsEl.appendChild(pEl);
    for (var i = 0; i < quizQuestions[questionId].answers.length; i++) {
        var button = document.createElement("button");
        button.textContent = quizQuestions[questionId].answers[i];
        button.setAttribute("value", quizQuestions[questionId].answers[i]);
        questionsEl.appendChild(button);
        button.addEventListener("click", function () {
            if (this.value === quizQuestions[questionId].correctAnswer) {
                alert("That's Correct");
                questionsEl.innerHTML = "";
                questionId++;
                if (questionId < 5) {
                    questionNumber();
                } else {
                    showScore();

                }
            } else {
                secondsLeft = secondsLeft - 10;
                timeEl.textContent = "Timer: " + secondsLeft;
                alert("You're wrong!");
                questionsEl.innerHTML = "";
                questionId++;
                if (questionId < 5) {
                    questionNumber();
                } else {
                    showScore();
                }
            }
        })
    };
}

submitEl.addEventListener("click", function () {
    var score = {
        initial: initialsEl.value,
        timescore: secondsLeft
    }
    localStorage.setItem(local, score);
    local++;
})

function showScore() {
    clearInterval(timerInterval);
    console.log(secondsLeft);
    questionsEl.style.display = 'none';
    endEl.style.display = 'block';
}

highScoresButton.addEventListener("click", function () {
    questionsEl.style.display = 'none';
    endEl.style.display = 'none';
    wrapperEl.style.display = 'block';
    for (var i = 0; i < 10; i++) {
        var highP = document.createElement("p");
        highP.textContent = JSON.stringify(localStorage.getItem(i));;
        cardEl.appendChild(highP);
        console.log(highP);
    }
})




clearEl.addEventListener("click", function () {
    localStorage.clear();
})




//timer should also subtract time for any incorrect answers
//splash page message should be replaced by questions and possible answers
//after each question display next question and answer set along with if the previous question was correct or