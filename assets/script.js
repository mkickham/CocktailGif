var startButton = document.querySelector('.btn');
var questionEl = document.querySelector('#question');
var randomButton = document.querySelector('.random');
var randomUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';

const questions = [
    {
        question1: 'Which alcohol base do you prefer?',
        option1: 'Vodka',
        option2: 'Whiskey',
        option3: 'Gin',
        option4: 'Rum',
        option5: 'Tequila'
    },

    {
        question2: 'Which flavor do you prefer?',
        option1: 'Sweet',
        option2: 'Fruity',
        option3: 'Sour',
        option4: 'Bitter',
        option5: 'Spicy'
    },
    {
        question3: 'Which vacation spot would you choose?',
        option1: 'Beach',
        option2: 'Mountains',
        option3: 'Big city',
        option4: 'Camping trip',
        option5: 'Ski trip'
    }
]

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const nextBtn = document.querySelector("btn");

let currentQuestionIndex = 0;

// this starts the quiz and then once the quiz is started it hides the start button
function startQuiz() {
    currentQuestionIndex = 0;
    generateQuestions();
    startButton.style.display = 'none';
}

function resetState(){
    nextBtn.style.display = 'none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

// create variable for each option

function generateQuestions(q){
    resetState();
    q = questions.pop();
    questionEl.textContent = q.question1;
    option1.textContent = q.option1;
    option2.textContent = q.option2;
    option3.textContent = q.option3;
    option4.textContent = q.option4;
    option5.textContent = q.option5;
    // figure out if we need new button or use start button
    // document.querySelector('answerBTN').textContent = 'Next Question';
    if (q < questions.length){
        currentQuestionIndex++;
    } else {
        navigateToScore();
    }

}

function checkAnswers() {

}

function navigateToScore(){
    // some way to navigate to the page with your drink choice and gif
}

function generateRandom() {
    fetch(randomUrl)
    .then((response) => response.json())
    .then((data) => {
    console.log(data)
    })
    
}
startButton.addEventListener('click', startQuiz())