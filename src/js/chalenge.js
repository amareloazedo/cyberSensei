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
        pontuacao++;
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
    const overlay = document.getElementById('overlay');
    const resultCard = document.getElementById('resultCard');
    const scoreDisplay = document.getElementById('scoreDisplay');

    containerPergunta.classList.add('hidden');
    elementoResultado.classList.remove('hidden');
    scoreDisplay.textContent = `${pontuacao} de ${perguntasDesafio.length}`;
    //resultElement.textContent = 'Você completou o quiz! Sua pontuação final é: ${score} de ${perguntasDesafio.length}';

    escolherFaixa();
    resultCard.style.display = 'block';
    overlay.style.display = 'block';
}

overlay.addEventListener('click', function() {
    resultCard.style.display = 'none';
    overlay.style.display = 'none';
});

function escolherFaixa(){
    const corFaixa = document.getElementById('cor');
    const nomeFaixa = document.getElementById('nomeFaixa');

    if(pontuacao === 10){
        corFaixa.style.backgroundColor = 'rgb(47, 47, 47)';
        nomeFaixa.textContent = "Preta";
    }else if(pontuacao < 10 && pontuacao >= 7){
        corFaixa.style.backgroundColor = 'brown';
        nomeFaixa.textContent = "Marrom";
    }else if(pontuacao < 7 && pontuacao >= 5){
        corFaixa.style.backgroundColor = 'purple';
        nomeFaixa.textContent = "Roxa";
    }else if(pontuacao < 5 && pontuacao >= 3){
        corFaixa.style.backgroundColor = 'yellow';
        nomeFaixa.textContent = "Amarela";
    }else if(pontuacao < 3 && pontuacao >= 1){
        corFaixa.style.backgroundColor = 'blue';
        nomeFaixa.textContent = "Azul";
    }else{
        corFaixa.style.backgroundColor = '#D5D5D5';
        nomeFaixa.textContent = "Branca";
    }
}
// COMEÇAR O QUIZ
mostrarPergunta();

    // faixa preta = 10
    // faixa marrom = 7
    // faixa roxa = 5
    // faixa amarela = 3
    // faixa azul = 1
    // faixa branca = 0
