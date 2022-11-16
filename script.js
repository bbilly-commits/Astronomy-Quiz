const quizData = [
    {
        question: "ดาวเคราะห์ในระบบสุริยะของเรามีกี่ดวง?",
        a: "6",
        b: "7",
        c: "8",
        d: "9",
        correct: "c",
    },
    {
        question: "ดาวเคราะห์ที่เล็กที่สุดและใหญ่ที่สุดในระบบสุริยะของเราคืออะไร?",
        a: "ดาวเสาร์, ดาวพุธ",
        b: "ดาวศุกร์, ดาวพลูโต",
        c: "ดาวอังคาร, โลก",
        d: "ดาวพฤหัส, ดาวพุธ",
        correct: "d",
    },
    {
        question: "ดาวดวงใดใช้เวลาหมุนรอบตัวเองนานที่สุด",
        a: "ดาวศุกร์",
        b: "ดาวอังคาร",
        c: "ดาวเสาร์",
        d: "ดวงอาทิตย์",
        correct: "a",
    },
    {
        question: "ใครเป็นคนแรกที่ถูกส่งขึ้นไปในอวกาศ",
        a: "Pavel Popovich",
        b: "Yuri Gagarin",
        c: "Edwin Aldrin",
        d: "Harrison Schmitt",
        correct: "b",
    },
    {
        question: "'ดาวเคราะห์แดง' เป็นชื่อเล่นของดาวอะไร?",
        a: "ดาวอังคาร",
        b: "ดาวเสาร์",
        c: "ดาวพฤหัส",
        d: "ดาวศุกร์",
        correct: "a",
    },
    {
        question: "กลุ่มดาวที่มีลักษณะคล้ายกับวัตถุบนโลกเรียกว่าอะไร?",
        a: "กาแล็กซี่",
        b: "กลุ่มดาว",
        c: "เนบิวลา",
        d: "ดาวตก",
        correct: "b",
    },
    {
        question: "ดาวดวงใดมีจุดแดงใหญ่",
        a: "ดาวพุธ",
        b: "ดาวเนปจูน",
        c: "ดาวยูเรนัส",
        d: "ดาวพฤหัส",
        correct: "d",
    },
    {
        question: "ดาวเสาร์เป็นที่รู้จักของความสวยงามของส่วนใด",
        a: "พระอาทิตย์ขึ้น",
        b: "หลุม",
        c: "ภูเขา",
        d: "วงแหวน",
        correct: "d",
    },
    {
        question: "ดาวเทียมอวกาศของประเทศใดที่ถูกส่งขึ้นไปบนอวกาศ",
        a: "สหรัฐอเมริกา",
        b: "จีน",
        c: "สหภาพโซเวียต",
        d: "อังกฤษ",
        correct: "c",
    },
    {
        question: "กาแล็กซีที่เราอาศัยอยู่ชื่ออะไร?",
        a: "ดาราจักรทางช้างเผือก",
        b: "ดาราจักรแคระ",
        c: "เนบิวลา",
        d: "ดาราจักรแอนดรอเมดา",
        correct: "a",
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
