
// PONTUAÇÃO DO USUÁRIO
let score = 0;

for (let i = 0; i < perguntasDesafio.length; i++) {
    const currentQuestion = perguntasDesafio[i];

    const userAnswer = prompt(`${currentQuestion.question}\n${currentQuestion.answers.map((answer, index) => `${index + 1}. ${answer}`).join('\n')}\n\nDigite o número da sua resposta:`);

    if (userAnswer - 1 === currentQuestion.correct) {
        alert("Correto!");
        score++;
    } else {
        alert(`Incorreto! A resposta correta é: ${currentQuestion.answers[currentQuestion.correct]}`);
    }
}

alert(`Você completou o quiz! Sua pontuação final é: ${score} de ${quizQuestions.length}`);