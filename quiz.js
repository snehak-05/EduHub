const questions = [
    {
        question: "What is the output of print(2 * 3 + 4)?",
        answers: [
            { text: "a) 10", correct: true },
            { text: "b) 14", correct: false },
            { text: "c) 8", correct: false },
            { text: "d) Syntax error", correct: false },
        ]
    },
    {
        question: "Which of the following is a valid variable name in Python?",
        answers: [
            { text: "a) 2variable", correct: false },
            { text: "b) variable_2", correct: true },
            { text: "c) variable-2", correct: false },
            { text: "d) None of the above", correct: false },
        ]
    },
    {
        question: "What is the output of print(10 // 3)?",
        answers: [
            { text: "a) 3.33", correct: false },
            { text: "b) 3", correct: true },
            { text: "c) 4", correct: false },
            { text: "d) 3.0", correct: false },
        ]
    },
    {
        question: "What is the output of print('Hello' + 'World')?",
        answers: [
            { text: "a) HelloWorld", correct: true },
            { text: "b) Hello World", correct: false },
            { text: "c) Hello+World", correct: false },
            { text: "d) Syntax error", correct: false },
        ]
    },
    {
        question: "Which keyword is used to define a function in Python?",
        answers: [
            { text: "a) func", correct: false },
            { text: "b) function", correct: false },
            { text: "c) def", correct: true },
            { text: "d) define", correct: false },
        ]
    }
];

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn"); 

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "Next";
    nextButton.style.display = "none";
    backButton.style.display = "none"; 
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
    nextButton.innerHTML = "Play Again";
    nextButton.style.display = "block";
    backButton.style.display = "block"; 
}

function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

backButton.addEventListener("click", () => {
    window.location.href = "watch-video/python-course.html"; 
});

startQuiz();

