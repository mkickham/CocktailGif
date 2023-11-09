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
        question2: 'Which type of vacation would you choose?',
        option1: 'Beach',
        option2: 'Mountains',
        option3: 'City',
        option4: 'Camping'
    },
    {
        question3: 'What is your favorite season?',
        option1: 'Winter',
        option2: 'Fall',
        option3: 'Summer',
        option4: 'Spring'
    },
    {
        question4: 'Which dessert would you choose?',
        option1: 'Chocolate Cake',
        option2: 'Ice Cream',
        option3: 'Fruit Salad',
        option4: 'Cheesecake'
    },
    {
        question5: 'Which of the following would be describe your personality?',
        option1: 'Outgoing',
        option2: 'Introverted',
        option3: 'Adventurous',
        option4: 'Cautious'
    }
]

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const nextBtn = document.querySelector("btn");

let currentQuestionIndex = 0;


function startQuiz() {
    currentQuestionIndex = 0;
}

function checkAnswers() {

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