var timeEl = document.querySelector(".timer");
var startEl = document.querySelector(".start-button");
var questionsEl = document.querySelector(".questions");
var mainEl = document.querySelector(".main-content");
var endEl = document.querySelector(".end-game");
var clearEl = document.querySelector(".clear");
var secondsLeft = 90;
var questionId = 0;
var answerId = 0;

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
    var timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = "Timer: " + secondsLeft;

        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            // sendMessage();
        }
    }, 1000);
}

startEl.addEventListener("click", function () {
    timer();
    startEl.style.visibility = 'hidden';
    questionNumber();
}
)

function chooseAnswer() {
    button.addEventListener("click", function () {
        if (button.value === quizQuestions[questionId].correctAnswer) {
            alert("That's Correct");
            questionId++;
        } else {
            secondsLeft - 10;
            alert("You're wrong!");
            questionId++;
        }
    });
}

function nextQuestion() {
    for (i = 0; i < quizQuestions[questionId].length; i++) {
    questionId++;    
    }
}

function questionNumber() {
    var pEl = document.createElement("p");
    pEl.textContent = quizQuestions[questionId].question;
    questionsEl.appendChild(pEl);
    for (i = 0; i < quizQuestions[questionId].answers.length; i++) {
        var button = document.createElement("button");
        button.textContent = quizQuestions[questionId].answers[i];
        button.setAttribute("value", quizQuestions[questionId].answers[i]);
        questionsEl.appendChild(button);
        button.addEventListener("click", function () {
        if (button.value === quizQuestions[questionId].correctAnswer) {
            alert("That's Correct");   
            nextQuestion();       
        } else {
            secondsLeft - 10;
            alert("You're wrong!");
            nextQuestion();
        }
    })
    };

}
    

function wrongAnswer() {
    secondsLeft - 15;
}

// endEl.style.visibility = 'hidden';



clearEl.addEventListener("click", function () {
    localStorage.clear();
})




//timer should also subtract time for any incorrect answers
//splash page message should be replaced by questions and possible answers
//after each question display next question and answer set along with if the previous question was correct or