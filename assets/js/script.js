var startButton = document.getElementById('start-btn');
var questionContainerElement = document.getElementById('question-container');

var shuffledQuestions, currentQuestionsIndex;

startButton.addEventListener('click', startGame);

function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = question.sort(() => Math.random() -.5);
    currentQuestionsIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
}

function setNextQuestion() {
    showQuestion(shuffledQuestions[currentQuestionsIndex])
}

function showQuestion(question) {

}

function selectAnswer() {}

var question = [
    {
        question: 'What is the coolest Fortnite skin?',
        answer: [
            { text: 'Jogn Wick', correct: true },
            { text: 'P.A.N.D.A Team Leader', correct: false }
        ]

    }
]