var startButton = document.getElementById('start-btn');
var nextButton = document.getElementById('next-btn');
var questionContainerElement = document.getElementById('question-container');
var questionElement = document.getElementById('question');
var answerButtonsElement = document.getElementById('answer-buttons');
var timerEl = document.getElementById('countdown');
var correctEl = document.getElementById('correct');
var wrongEl = document.getElementById('wrong');

var shuffledQuestions, currentQuestionsIndex;

startButton.addEventListener('click', startGame);
nextButton.addEventListener('click', () => {
    currentQuestionsIndex++;
    setNextQuestion();
})

function countDown() {
    var timeLeft = 90;

    var timeInterval = setInterval(function () {
        timeLeft--;
        timerEl.textContent = timeLeft + ' seconds left.';
  
        if(timeLeft === 0) {
          clearInterval(timeInterval);
          timerEl.textContent = '';
        }
  
    }, 1000);
}

function startGame() {
    console.log('started');
    startButton.classList.add('hide');
    shuffledQuestions = questions.sort(() => Math.random() - .5);
    currentQuestionsIndex = 0;
    questionContainerElement.classList.remove('hide');
    setNextQuestion();
    countDown();
}

function setNextQuestion() {
    resetState();
    showQuestion(shuffledQuestions[currentQuestionsIndex]);
}

function showQuestion(question) {
    questionElement.innerText = question.question
    question.answer.forEach(answer => {
        var button = document.createElement('button');
        button.innerHTML = answer.text;
        button.classList.add('btn');
        if (answer.correct) {
            button.dataset.correct = answer.correct
        }
        button.addEventListener('click', selectAnswer);
        answerButtonsElement.appendChild(button);
    })
}

function resetState() {
    nextButton.classList.add('hide');
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild);
    }
}

function selectAnswer(e) {
    var selectedButton = e.target;
    var correct = selectedButton.dataset.correct;
    if (shuffledQuestions.length > currentQuestionsIndex + 1) {
        nextButton.classList.remove('hide');
    } else {
        startButton.innerText = 'Restart';
        startButton.classList.remove('hide');
    }
    nextButton.classList.remove('hide');
}

var questions = [
        {
            question: 'What is the coolest Fortnite skin?',
            answer: [
                {text: 'John Wick', correct: true },
                {text: 'P.A.N.D.A Team Leader', correct: false },
                {text: 'Naruto', correct: false},
                {text: 'Skull Trooper', correct: false}
            ]

        },
        {
            question: 'What is it like to win something?',
            answer: [
                {text: 'Idk seems like fun tho', correct: true},
                {text: 'What is a win?', correct: false},
                {text: 'Amazing tbh, nothing better.', correct: false},
                {text: 'Winning is something out of realm of possibility for me, my luck and circumstances are so awful that I will never be able to know what a win is.', correct: false}
            ]
        },
        {
            question: 'What would you do for a Klondike Bar?',
            answer: [
                {text: 'I would fight anything and everything for a Klondike Bar', correct: true},
                {text: 'I would pour milk before the cereal.', correct: false},
                {text: 'I would find a cure to cancer', correct: false},
                {text: 'I would give a bear a hug', correct: false}
            ]
        },
        {
            question: 'How in the, would, ?',
            answer: [
                {text: 'Tbh idk how to answer this. Are you ok? Do you need help?', correct: true},
                {text: 'E equals MC squared.', correct: false},
                {text: 'The snow is finally melting, maybe spring 5 is over with.', correct: false},
                {text: 'How did you know?', correct: false}
            ]
        },
        {
            question: 'Question',
            answer: [
                {text: 'Can I please leave, we are already 5 mins into passing time.', correct: true},
                {text: 'Something about something with something.', correct: false},
                {text: 'What would YOU do for a klondike bar?', correct: false},
                {text: 'Somewhere over the rainbow', correct: false}
            ]
        }
    ]
