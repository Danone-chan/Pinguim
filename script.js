// Aqui você pode adicionar quantas perguntas quiser!
const flashcards = [
    {
        question: "Todos os pinguins vivem no gelo da Antártica?",
        answer: "Não! Existem espécies que vivem na África do Sul, Chile, Peru e até nas Ilhas Galápagos, perto do Equador."
    },
    {
        question: "O que os pinguins comem?",
        answer: "Eles adoram peixes, lulas e krill (pequenos crustáceos)."
    },
    {
        question: "Os pinguins conseguem voar?",
        answer: "No ar não, mas eles usam suas asas como nadadeiras para 'voar' super rápido debaixo d'água!"
    },
    {
        question: "Qual é o maior perigo para o meio ambiente dos pinguins?",
        answer: "As mudanças climáticas. O aquecimento global derrete o gelo marinho, diminuindo o espaço onde vivem e a quantidade de comida."
    },
    {
        question: "Qual é a maior espécie de pinguim do mundo?",
        answer: "O Pinguim-imperador! Ele pode passar de 1 metro de altura."
    }
];

let currentIndex = 0;

const flashcardEl = document.getElementById('flashcard');
const questionEl = document.getElementById('question');
const answerEl = document.getElementById('answer');
const btnNext = document.getElementById('btn-next');
const btnPrev = document.getElementById('btn-prev');

function loadCard() {
    // Se a carta estiver virada, desvira antes de trocar a pergunta
    flashcardEl.classList.remove('flipped');
    
    // Um pequeno atraso (setTimeout) para o texto não mudar no meio do giro
    setTimeout(() => {
        questionEl.textContent = flashcards[currentIndex].question;
        answerEl.textContent = flashcards[currentIndex].answer;
    }, 200);
}

// Faz a carta virar quando você clica nela
flashcardEl.addEventListener('click', () => {
    flashcardEl.classList.toggle('flipped');
});

// Botão de Próxima
btnNext.addEventListener('click', () => {
    currentIndex = (currentIndex + 1) % flashcards.length;
    loadCard();
});

// Botão de Anterior
btnPrev.addEventListener('click', () => {
    currentIndex = (currentIndex - 1 + flashcards.length) % flashcards.length;
    loadCard();
});

// Carrega a primeira carta ao abrir o site
loadCard();
