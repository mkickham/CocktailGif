var startButton = document.querySelector('.btn');
var questionEl = document.querySelector('#question');
var randomButton = document.querySelector('.random');
var randomUrl = 'https://www.thecocktaildb.com/api/json/v1/1/random.php';
const giphyURL = 'https://api.giphy.com/v1/gifs/random?api_key=CmG15QVxvHNsJsCVS3PmV1qNaz5bhK3g&tag=&rating=g'

var q3Answer = '';
var currentQuestion = '';
var drinkUrl = 'https://www.thecocktaildb.com/api/json/v1/1/search.php?i='

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
        option2: 'Spicy',
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

// var question1 = questions[0]

const questionElement = document.getElementById("question");
const answerBtn = document.getElementById("answer-btn");
const nextBtn = document.querySelector("btn");

let currentQuestionIndex = 0;

// this starts the quiz and then once the quiz is started it hides the start button
function startQuiz() {
    generateQuestions();
    document.getElementById("btn").style.display = 'none';
    
   // startButton.style.display = 'none';
}

document.getElementById("btn").addEventListener("click", startQuiz);

function resetState(){
   // nextBtn.style.display = 'none';
    while(answerBtn.firstChild){
        answerBtn.removeChild(answerBtn.firstChild);
    }
}

// create variable for each option

function generateQuestions(){
   // resetState();
    var question = questions[currentQuestionIndex]
    questionEl.textContent = question.question;
    option1.textContent = question.option1;
    option2.textContent = question.option2;
    option3.textContent = question.option3;
    option4.textContent = question.option4;
    
}


function loadNextQuestion(){ 
    console.log(currentQuestionIndex)
    if (currentQuestionIndex === questions.length - 1) {
        navigateToScore();
    } else {
    currentQuestionIndex++;
    generateQuestions();
    }
}

function navigateToScore(){
    document.querySelector('.quiz').style.display = 'none';
    document.getElementById('resultContainer').style.display = 'block';
    resultHandler()
}

function generateRandom() {
    var drinkIngr = document.getElementById('ingredients');
    var drinkName = document.getElementById('drink-name');
    fetch(randomUrl)
    .then((response) => response.json())
    .then((data) => {
    drinkName.textContent = data.drinks[0].strDrink;
    instructions.textContent = data.drinks[0].strInstructions;
    drinkIngr.textContent = 'Ingredients: ' + data.drinks[0].strIngredient1 + ', ' + data.drinks[0].strIngredient2 + ', ' + data.drinks[0].strIngredient3;
    })

    var giphyRandom = document.getElementById('giphy')

    fetch('https://api.giphy.com/v1/gifs/random?api_key=CmG15QVxvHNsJsCVS3PmV1qNaz5bhK3g&tag=alcohol&rating=g')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        giphyRandom.innerHTML = "<img src=" + data.data.images.original.url + "></img>"
    })
    
}
var answers = [];
let obj = document.getElementById('answer-btn');
let varia;
obj.addEventListener('click', function(event) {
    varia = event.target.textContent;
    answers.push(varia);
    loadNextQuestion();
    
})
var q1Answer = answers[0];
var q2Answer = answers[1];

function resultHandler() {
    var drinkImage;
    var instructions = document.getElementById('instructions');
    var drinkName = document.getElementById('drink-name');
    var yourDrink;
    var drinkPhoto = document.getElementById('drink-image');
    var drinkIngr = document.getElementById('ingredients');
    if(answers[0] === 'Vodka' && answers[1] === 'Sweet') {
        yourDrink = 'moscow_mule';
        drinkImage = './assets/images/MoscowMule.jpg';
    } else if(answers[0] === 'Vodka' && answers[1] === 'Sour'){
        yourDrink = 'vodka_lemon';
        drinkImage = './assets/images/vodka_lemon.jpg';
    } else if(answers[0] === 'Whiskey' && answers[1] === 'Sweet'){
        yourDrink = 'hot_toddy';
        drinkImage = './assets/images/hot_toddy.jpg';
    } else if(answers[0] === 'Whiskey' && answers[1] === 'Sour'){
        yourDrink = 'owen%27s_grandmother%27s_revenge';
        drinkImage = './assets/images/owens_grandmothers_revenge.jpg';
    } else if(answers[0] === 'Tequila' && answers[1] === 'Sweet'){
        yourDrink = 'margarita';
        drinkImage = './assets/images/margarita.jpg';
    } else if(answers[0] === 'Tequila' && answers[1] === 'Sour'){
        yourDrink = 'tequila_sour';
        drinkImage = './assets/images/tequila_sour.jpg';
    } else if(answers[0] === 'Rum' && answers[1] === 'Sweet'){
        yourDrink = 'rum_punch';
        drinkImage = './assets/images/rum_punch.jpg';
    } else if(answers[0] === 'Rum' && answers[1] === 'Sour'){
        yourDrink = 'rum_sour';
        drinkImage = './assets/images/rum_sour.jpg';
    } else {
        generateRandom();
    }
    fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + yourDrink)
    .then(response => response.json())
    .then((data) => {
    drinkName.textContent = data.drinks[0].strDrink;
    instructions.textContent = data.drinks[0].strInstructions;
    drinkIngr.textContent = 'Ingredients: ' + data.drinks[0].strIngredient1 + ', ' + data.drinks[0].strIngredient2 + ', ' + data.drinks[0].strIngredient3;
    drinkPhoto.innerHTML = '<img src=' + drinkImage + '></img>'
    

    console.log(data)
    })

    var giphyRandom = document.getElementById('giphy')

    fetch('https://api.giphy.com/v1/gifs/random?api_key=CmG15QVxvHNsJsCVS3PmV1qNaz5bhK3g&tag=alcohol&rating=g')
    .then(response => response.json())
    .then((data) => {
        console.log(data);
        giphyRandom.innerHTML = "<img src=" + data.data.images.original.url + "></img>"
    })
}




startButton.addEventListener('click', startQuiz)
 