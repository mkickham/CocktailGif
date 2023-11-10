var startButton = document.querySelector('.btn');
var questionEl = document.querySelector('#question');
var randomButton = document.querySelector('.random');
var randomUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
var q1Answer = '';
var q2Answer = '';
var q3Answer = '';
var q = '';

var questions = [
    {
        question: 'Which alcohol base do you prefer?',
        option1: 'Vodka',
        option2: 'Whiskey',
        option3: 'Tequila',
        option4: 'Rum'
    },
    {
        question: 'Which flavor do you prefer?',
        option1: 'Sweet',
        option2: 'spicy',
        option3: 'Sour',
        option4: 'Bitter'
    },
    {
        question: 'Which type of vacation would you choose?',
        option1: 'Beach',
        option2: 'Mountains',
        option3: 'City',
        option4: 'Camping'
    },
    {
        question: 'What is your favorite season?',
        option1: 'Winter',
        option2: 'Fall',
        option3: 'Summer',
        option4: 'Spring'
    },
    {
        question: 'Which dessert would you choose?',
        option1: 'Chocolate Cake',
        option2: 'Ice Cream',
        option3: 'Fruit Salad',
        option4: 'Cheesecake'
    },
    {
        question: 'Which of the following would be describe your personality?',
        option1: 'Outgoing',
        option2: 'Introverted',
        option3: 'Adventurous',
        option4: 'Cautious'
    }
]

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const nextBtn = document.querySelector("btn");

let currentQuestionIndex = questions[0];

// this starts the quiz and then once the quiz is started it hides the start button
function startQuiz() {
    currentQuestionIndex = 0;
    q = generateQuestions(q);
    
   // startButton.style.display = 'none';
}

function resetState(){
   // nextBtn.style.display = 'none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

// create variable for each option

function generateQuestions(q){
   // resetState();
    q = questions.pop();
    questionEl.textContent = q.question;
    option1.textContent = q.option1;
    option2.textContent = q.option2;
    option3.textContent = q.option3;
    option4.textContent = q.option4;
    option5.textContent = q.option5;
    
    // figure out if we need new button or use start button
    // document.querySelector('answerBTN').textContent = 'Next Question';
    if (currentQuestionIndex < questions.length){
        currentQuestionIndex++;
    } else {
        navigateToScore();
    }
    return q;

}
var answer;
function checkAnswers(answer) {
const optionButtons = document.querySelectorAll('.answerBTN');
optionButtons.forEach(optionbuttons => {
    optionbuttons.addEventListener('click', processClick);
})
}

function processClick(answer) {
    answer = this.id;
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

let obj = document.getElementById('answer-btn');
let varia;
obj.addEventListener('click', function(event) {
    varia = event.target.textContent;
    console.log(varia);
})
startButton.addEventListener('click', startQuiz)
 console.log(q)
 