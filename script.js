    
    
const questions = [
    {
        question: "Quel est le nom de l'attaque la plus puissante de Goku ?",
        options: ["Kamehameha", "Final Flash", "Genki Dama", "Masenko"],
        answer: "Genki Dama"
    },
    {
        question: "Quel anime met en scène un garçon nommé Naruto Uzumaki ?",
        options: ["One Piece", "Dragon Ball", "Naruto", "Attack on Titan"],
        answer: "Naruto"
    },
    {
        question: "Dans quel anime apparaît le personnage d'Edward Elric ?",
        options: ["Fullmetal Alchemist", "Bleach", "Naruto", "One Piece"],
        answer: "Fullmetal Alchemist"
    }
];

let currentQuestionIndex = 0;
let score = 0;

function displayQuestion() {
    const question = questions[currentQuestionIndex];
    document.getElementById('question-container').textContent = question.question;
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    question.options.forEach(option => {
        const li = document.createElement('li');
        li.innerHTML = `<input type="radio" name="option" value="${option}"> ${option}`;
        optionsContainer.appendChild(li);
    });
}

function checkAnswer() {
    const selectedOption = document.querySelector('input[name="option"]:checked');
    if (!selectedOption) {
        alert("Veuillez sélectionner une réponse !");
        return;
    }
    if (selectedOption.value === questions[currentQuestionIndex].answer) {
        score++;
    }
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        showScore();
    }
}

function showScore() {
    document.getElementById('score').textContent = `Votre score est ${score} sur ${questions.length}`;
    document.getElementById('score').style.display = 'block';
    document.getElementById('submit-btn').style.display = 'none';
}

document.getElementById('submit-btn').addEventListener('click', checkAnswer);

displayQuestion();

