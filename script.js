const quizques = [
    {
    question: "What was the name of the first computer programmer? "
    ,
    a:'Ada lovelace',
    b:'Christene olakhey',
    c:'Jackie chan',
    d:'Debyuk dosannkie',
    correct : 'a',
},
{
question: "what is the scientific name of humans?",
    a: 'Homo sapiens',
    b:'Homo angiolems',
    c: 'Halo simeriuns',
    d:'homo promethius',
    correct :'a',

},
{
    question: "What Planet is closest to the sun?",
    a: 'Neptune',
    b:'Earth',
    c: 'Mars',
    d:'Mercury',
      correct :'d',
},
{
    question: "Which is the brightest planet in the night sky? ",
    a: 'Saturn',
    b:'Mercury',
    c: 'Mars',
    d:'Venus',
    correct :'d',

},
{
    question: "Which is the smallest planet within our solar system ?",
    a: 'Venus',
    b:'Saturn',
    c: 'Mercury',
    d:'Mars',
    correct :'d',

},
];
const quiz = document.getElementById("quiz");

const answerEls = document.querySelectorAll(".answer");

const questionEl = document.getElementById("question");

const atext = document.getElementById("atext");
const btext = document.getElementById("btext");
const ctext = document.getElementById("ctext");
const dtext = document.getElementById("dtext");

const submitbtn = document.getElementById("submit");
let currentquiz = 0;
let score = 0;

loadquiz();

function loadquiz() {

    deselectanswers();
     
    const currentquizques = quizques[currentquiz];
   
    questionEl.innerText = currentquizques.question;
    
    atext.innerText = currentquizques.a;
    btext.innerText = currentquizques.b; 
    ctext.innerText = currentquizques.c;
    dtext.innerText = currentquizques.d;
    
   


}
function getselected(){

    let answer = undefined;

    answerEls.forEach((answerEl) => {
        if(answerEl.checked){
         answer = answerEl.id;
        }
    });

    return answer;
}

function deselectanswers() { 
 
    answerEls.forEach((answerEl)=> {
     
        answerEl.checked = false;
        
    });


}

submitbtn.addEventListener("click", () => {

    const answer = getselected();
   

if (answer) {

    if (answer === quizques[currentquiz].correct) {
        score++ ;
    }

    currentquiz++ ;

    if (currentquiz < quizques.length){
        loadquiz();
    }   
    else  
    { 
        quiz.innerHTML= `<h2> you answered  ${score} / ${quizques.length} questions correctly :)
        </h2> <button onclick = "location.reload()"> Reload </button>` ;
        
    }

    
  
} 



});