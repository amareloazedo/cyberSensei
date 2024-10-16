
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca
    }
}

shuffle(perguntasDesafio);

// PONTUAÇÃO DO USUÁRIO
let score = 0;

for (let i = 0; i < perguntasDesafio.length; i++) {
    const perguntaAtual = perguntasDesafio[i];

    const respostaUsuario = prompt(`${perguntaAtual.question}\n${perguntaAtual.answers.map((answer, index) => `${index + 1}. ${answer}`).join('\n')}\n\nDigite o número da sua resposta:`);

    if (respostaUsuario - 1 === perguntaAtual.correct) {
        alert("Correto!");
        score++;
    } else {
        alert(`Incorreto! A resposta correta é: ${perguntaAtual.answers[perguntaAtual.correct]}`);
    }
}

alert(`Você completou o quiz! Sua pontuação final é: ${score} de ${perguntasDesafio.length}`);