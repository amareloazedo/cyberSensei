
// INDENTIFICADOR DA PERGUNTA ATUAL
let perguntaAtualId = 0;

// PONTUAÇÃO DO USUÁRIO
let pontuacao = 0;

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
    elementoResultado.textContent = `Você completou o quiz! Sua pontuação final é: ${pontuacao} de ${perguntasDesafio.length}`;
}

// COMEÇAR O QUIZ
mostrarPergunta();

    // faixa preta = 10
    // faixa marrom = 7
    // faixa roxa = 5
    // faixa amarela = 3
    // faixa azul = 1
    // faixa branca = 0
