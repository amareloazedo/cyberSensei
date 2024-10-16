
<<<<<<< HEAD
// INDENTIFICADOR DA PERGUNTA ATUAL
let perguntaAtualId = 0;
=======
function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]]; // Troca
    }
}

shuffle(perguntasDesafio);
>>>>>>> 8a42c2e86addb569f721824e5add40aaa2d78848

// PONTUAÇÃO DO USUÁRIO
let pontuacao = 0;

<<<<<<< HEAD
function mostrarPergunta() {
    const containerPergunta = document.getElementById('formDesafio');
    const elementoPergunta = document.getElementById('pergunta');
    const elementosResposta = document.getElementById ('resposta');
    const botaoSeguir = document.getElementById ('botao-seguir');

    const perguntaAtual = perguntasDesafio[perguntaAtualId];

    elementoPergunta.textContent = perguntaAtual.question;
    elementosResposta.innerHTML = '';

    // PERGUNTAS GERADAS NA TELA
    perguntaAtual.answers.forEach((answer, index) => {
        const elementoResposta = document.createElement('p');
        elementoResposta.classList.add('answer');
        elementoResposta.textContent = answer;
        elementoResposta.addEventListener('click', () => selecionarResposta(index));
        elementosResposta.appendChild(elementoResposta);
    });

    // ESCONDER O BOTÃO DE PROSSEGUIR.
    botaoSeguir.classList.add('hidden');
}

function selecionarResposta(index) {
    const perguntaAtual = perguntasDesafio[perguntaAtualId];
    const elementoResposta = document.getElementById('answers');
    
    // DESTACA A RESPOSTA SELECIONADA
    const elementosResposta = elementoResposta.getElementsByClassName('answer');
    for (let i = 0; i < elementosResposta; i++) {
        elementosResposta[i].classList.remove('selected');
    }
    elementosResposta[index].classList.add('selected');

    if (index === perguntaAtual.correct) {
        score++;
        alert("Correto!");
    } else {
        alert("Incorreto! A resposta correta é ${perguntaAtual.answers[perguntaAtual.correct]}");
    }

    const botaoSeguir = document.getElementById('botao-seguir');
    botaoSeguir.classList.remove('hidden');
}

document.getElementById('botao-seguir').addEventListener('click', () => {
    perguntaAtualId++;

    if (perguntaAtualId < perguntasDesafio.length) {
        mostrarPergunta();
    } else {
        mostrarResultado();
    }
});

function mostrarResultado() {
    const containerPergunta = document.getElementById('container-pergunta');
    const elementoResultado = document.getElementById('resultado');

    containerPergunta.classList.add('hidden');
    elementoResultado.classList.remove('hidden');
    resultElement.textContent = 'Você completou o quiz! Sua pontuação final é: ${score} de ${perguntasDesafio.length}';
}

// COMEÇAR O QUIZ
mostrarPergunta();

    // faixa preta = 10
    // faixa marrom = 7
    // faixa roxa = 5
    // faixa amarela = 3
    // faixa azul = 1
    // faixa branca = 0
=======
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
>>>>>>> 8a42c2e86addb569f721824e5add40aaa2d78848
