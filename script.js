let order = [];
let clickedOrder = [];
let score = 0;

// 0 - verde
// 1 - vermelho
// 2 - amarelo
// 3 - azul

const blue = document.querySelector('.blue');
const red = document.querySelector('.red');
const green = document.querySelector('.green');
const yellow = document.querySelector('.yellow');

let shufleOrder = () => {
    let colorOrder = Math.floor(Math.random() *4);
    order[order.length] = colorOrder;
    clickedOrder = [];

    for(let i in order){
        let elementColor = createColorElment(order[i]);
        lighColor(elementColor, Number(i) + 1);
    }
}



// acende a próxima cor
let lighColor = (element, number) => {
    number = number * 500;
    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    });
}

// Checa se os botões clicados são os mesmos da ordem gerada no jogo
let checkOrder = () => {
    for(let i in clickedOrder){
        if(clickedOrder[i] != order[i]) {
            gameOver();
            break;
        }
    }
    if (clickedOrder.length == order.length) {
        alert(`Pontuação: ${score}\nVocê acertou! Iniciando o próximo nível!`);
        nextLevel();
    }
}

// Funcão para o click do usuário
let click = (color) => {
    clickedOrder[clickedOrder.length] = color;
    createColorElment(color).classList.add('selected');
    setTimeout(() => {
        createColorElment(color).classList.remove('selected');
        checkOrder();
    }, 250);

    
}

// Função que retorna a cor
let createColorElment = (color) => {
    switch (color) {
        case 0:
            return green;
            break;
        case 1:
            return red;
            break;
        case 2:
            return yellow;
            break;
        case 3:
            return blue;
            break;
        default:
            break;
    }
}

// Função para próximo nível do jogo
let nextLevel = () => {
    score++;
    shufleOrder();
}

// Função para game over
let gameOver = () => {
    alert(`Pontuação: ${score}!\nVocễ perdeu o jogo!\nClick ok para iniciar novo jogo!`);
    order = [];
    clickedOrder = [];

    playGame();
}

// Função de início de jogo
let playGame = () => {
    alert('Bem-vindo ao jogo!\nIniciando novo jogo!');
    score = 0;

    nextLevel();
}

// Eventos de click
green.onclick = () => click(0);
red.onclick = () => click(1);
yellow.onclick = () => click(2);
blue.onclick = () => click(3);

playGame();



