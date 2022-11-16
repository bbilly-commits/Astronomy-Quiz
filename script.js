const quizData = [
    {
        question: "How many planets are in our solar system?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        correct: "c",
    },
    {
        question: "What are the smallest and largest planets in our solar system?",
        a: "Jupiter, Earth",
        b: "Venus, Pluto",
        c: "Mars, Earth",
        d: "Jupiter, Mercury",
        correct: "d",
    },
    {
        question: "How many natural satellites does the earth have?",
        a: "1",
        b: "2",
        c: "4",
        d: "20",
        correct: "a",
    },
    {
        question: "Most of the planets in our solar system are named after what?",
        a: "Norse gods",
        b: "Greek/Roman gods",
        c: "Stars",
        d: "None of the above",
        correct: "b",
    },
    {
        question: "'The Red Planet' is the poetic name for?",
        a: "Mars",
        b: "Saturn",
        c: "Jupiter",
        d: "Venus",
        correct: "a",
    },
    {
        question: "What's a group of stars that resemble an earthly object called?",
        a: "A galaxy",
        b: "A constellation",
        c: "A nebula",
        d: "A coma stellata",
        correct: "b",
    },
    {
        question: "Which planet has the Great Red Spot",
        a: "Mercury",
        b: "Pluto",
        c: "Uranus",
        d: "Jupiter",
        correct: "d",
    },
    {
        question: "Saturn is best known for its gorgeous",
        a: "Sunries",
        b: "Craters",
        c: "Mountains",
        d: "Rings",
        correct: "d",
    },
    {
        question: "A ball of ice and dust with a long, glowing tail is called what",
        a: "A meteor",
        b: "A asteroid",
        c: "A comet",
        d: "A blue dwarf",
        correct: "c",
    },
    {
        question: "What's the name of the galaxy we live in?",
        a: "The Milky Way",
        b: "The Fishnet",
        c: "The Zarathusthra",
        d: "The Andromeda",
        correct: "c",
    },
];

const quiz = document.getElementById('quiz')
const answerEls = document.querySelectorAll('.answer')
const questionEl = document.getElementById('question')
const a_text = document.getElementById('a_text')
const b_text = document.getElementById('b_text')
const c_text = document.getElementById('c_text')
const d_text = document.getElementById('d_text')
const submitBtn = document.getElementById('submit')


let currentQuiz = 0
let score = 0

loadQuiz()

function loadQuiz() {

    deselectAnswers()

    const currentQuizData = quizData[currentQuiz]

    questionEl.innerText = currentQuizData.question
    a_text.innerText = currentQuizData.a
    b_text.innerText = currentQuizData.b
    c_text.innerText = currentQuizData.c
    d_text.innerText = currentQuizData.d
}

function deselectAnswers() {
    answerEls.forEach(answerEl => answerEl.checked = false)
}

function getSelected() {
    let answer
    answerEls.forEach(answerE1 => {
        if (answerE1.checked) {
            answer = answerE1.id
        }
    })
    return answer
}


submitBtn.addEventListener('click', () => {
    const answer = getSelected()
    if (answer) {
        if (answer === quizData[currentQuiz].correct) {
            score++
        }

        currentQuiz++

        if (currentQuiz < quizData.length) {
            loadQuiz()
        } else {
            quiz.innerHTML = `
           <h2>You Answered ${score}/${quizData.length} questions correctly</h2>

           <button onclick="location.reload()">Reload</button>
           `
        }
    }
})
