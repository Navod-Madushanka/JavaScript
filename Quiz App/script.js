// CREATE A QUIZ CLASS
class Quiz {
    constructor(questions) {
        this.score = 0;
        this.questions = questions;
        this.questionIndex = 0
    }

    getquestionIndex() {
        return this.questions[this.questionIndex];
    }

    guess(answer) {
        if (this.getquestionIndex().isCorrectAnswer(answer)) {
            this.score++;
        }
        this.questionIndex++;
    }

    isEnded() {
        return this.questionIndex === this.questions.length;
    }
}

// CREATE A QUESTION CLASS
class Question {
    constructor(text, choices, answer) {
        this.text = text;
        this.choices = choices;
        this.answer = answer;
    }

    isCorrectAnswer(choice) {
        return this.answer === choice;
    }
}

//DISPLAY QUESTION
function displayQuestion() {
    if (quiz.isEnded()) {
        showScores();
    } else {
        // show question
        let questionElement = document.getElementById("question");
        questionElement.innerHTML = quiz.getquestionIndex().text;

        //show options
        let choices = quiz.getquestionIndex().choices;
        for (let i = 0; i < choices.length; i++) {
            let choiceElement = document.getElementById("choice" + i);
            choiceElement.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        showProgress();
    }
};

// GUESS FUNCTION
function guess(id, guess) {
    let button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        displayQuestion();
    }
}

// SHOW QUIZ PROGRESS
function showProgress() {
    let currentQuestionNumber = quiz.questionIndex + 1;
    let progressElement = document.getElementById("progress");
    progressElement.innerHTML = `Question ${currentQuestionNumber} of ${quiz.questions.length}`;
}

//SHOW SCORE
function showScores() {
    let quizEndHTML =
        `
   <h1>Quiz Completed</h1>
    <h2 id="score">You Scored: ${quiz.score} of ${quiz.questions.length}</h2>
    <div class="quiz-repeat">
        <a href="index.html">Take Quiz Again</a>
    </div>
   `;

    let quizElement = document.getElementById("quiz");
    quizElement.innerHTML = quizEndHTML;
}

//CREATE QUIZ QUESTIONS
let questions = [
    new Question("Hyper Text Markup Language Stands For?", ["JQuery", "XHTML", "CSS", "HTML"], "HTML"),
    new Question("Cascading Style Sheet Stands For?", ["HTML", "JQuery", "CSS", "XML"], "CSS"),
    new Question("Which is the JavaScript Framework?", ["React", "Laravel", "Django", "Sass"], "React"),
    new Question("Which is a backend language?", ["PHP", "XHTML", "React", "ALL"], "PHP"),
    new Question("Which is best for Artificial Interligence?", ["React", "Laravel", "Python", "Sass"], "Python")
];

let quiz = new Quiz(questions);

// DISPLAY QUESTIONS
displayQuestion();

// ADD A COUNTDOWN
let time = 10;
let quizTimeInMinutes = time * 60 * 60;
quizTime = quizTimeInMinutes / 60;

let counting = document.getElementById("count-down");

function startCountdown() {
    let quizTimer = setInterval(function() {
        if (quizTime <= 0) {
            clearInterval(quizTimer);
            showScores();
        } else {
            quizTime--;
            let sec = Math.floor(quizTime % 60);
            let min = Math.floor(quizTime / 60) % 60;
            counting.innerHTML = `TIME: ${min} : ${sec}`;
        }
    }, 1000);
}

startCountdown();