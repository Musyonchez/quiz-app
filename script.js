const quizData = [{
        question: "What is the most used programming language in 2019?",
        a: "Java",
        b: "C",
        c: "Python",
        d: "JavaScript",
        correct: "d",
    },
    {
        question: "Who is the President of US?",
        a: "Florin Pop",
        b: "Donald Trump",
        c: "Ivan Saldano",
        d: "Mihai Andrei",
        correct: "b",
    },
    {
        question: "What does HTML stand for?",
        a: "Hypertext Markup Language",
        b: "Cascading Style Sheet",
        c: "Jason Object Notation",
        d: "Helicopters Terminals Motorboats Lamborginis",
        correct: "a",
    },
    {
        question: "What year was JavaScript launched?",
        a: "1996",
        b: "1995",
        c: "1994",
        d: "none of the above",
        correct: "b",
    },
];

const quiz = document.getElementById("quiz");
const all_answers = document.querySelectorAll(".answer");
const question = document.getElementById("quiz-question");
const a_choice = document.getElementById("a_choice");
const b_choice = document.getElementById("b_choice");
const c_choice = document.getElementById("c_choice");
const d_choice = document.getElementById("d_choice");
const submitButton = document.getElementById("submit");

let currentQuiz = 0;
let score = 0;

loadQuiz();

function loadQuiz() {
    deselectAnswers();

    const currentQuizData = quizData[currentQuiz];

    question.innerText = currentQuizData.question;
    a_choice.innerText = currentQuizData.a;
    b_choice.innerText = currentQuizData.b;
    c_choice.innerText = currentQuizData.c;
    d_choice.innerText = currentQuizData.d;

    console.log(question, a_choice, b_choice, c_choice, d_choice);
}

function getSelected() {
    let answer = undefined;

    all_answers.forEach((all_answer) => {
        if (all_answer.checked) {
            answer = all_answer.id;
        }
    });

    console.log(answer); // Log the selected answer

    return answer;
}


function deselectAnswers() {
    all_answers.forEach((all_answer) => {
        all_answer.checked = false;
    });
}
    console.log("Submit rhbyutnhyth clicked"); // Log a message when the button is clicked

submitButton.addEventListener("click", () => {

        console.log("Submit button clicked"); // Log a message when the button is clicked

    // Get the selected answer
    const selectedAnswer = getSelected();

    console.log(selectedAnswer);

        console.log("getSelected rhbyutnhyth clicked"); // Log a message when the button is clicked


    // Check if an answer is selected
    if (selectedAnswer !== undefined) {
        // Check if the selected answer is correct
        const correctAnswer = quizData[currentQuiz].correct;
        if (selectedAnswer === correctAnswer) {
            score++; // Increment the score for a correct answer
        }

        // Move to the next question
        currentQuiz++;

        // Check if there are more questions
        if (currentQuiz < quizData.length) {
            loadQuiz(); // Load the next question
        } else {
            // Display the final score and reload button
            const resultText = `You answered correctly at ${score}/${quizData.length} question(s).`;
            quiz.innerHTML = `
                <h1>${resultText}</h1>
                <button onclick="location.reload()">Reload</button>
            `;
        }
    }
});
