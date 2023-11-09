var startButton = document.querySelector('.btn');
var questionEl = document.querySelector('#question');
var randomButton = document.querySelector('.random');
var randomUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
var q1Answer = '';
var q2Answer = '';
var q3Answer = '';

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


function startQuiz() {
    currentQuestionIndex = 0;
}
var answer;
function checkAnswers() {
const optionButtons = document.querySelectorAll('.answerBTN');
optionButtons.forEach(optionbuttons => {
    optionbuttons.addEventListener('click', processClick());
})
}

function processClick() {
    answer = this.id;
}

function generateQuestions() {
    
}

function generateRandom() {
    fetch(randomUrl)
    .then((response) => response.json())
    .then((data) => {
    console.log(data)
    })
    
}
startButton.addEventListener('click', startQuiz())