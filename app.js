alert('Seja bem-vindo ao jogo do numero secreto!');
let numeroSecreto = Math.round(Math.random() * 100);
let chute;
let tentativas = 1;

while (chute != numeroSecreto) {
    chute = prompt('Escolha um numero entre 1 e 100.');
    if (chute == numeroSecreto) {
        alert(`Isso aí! Você descobriu o numero secreto: ${numeroSecreto} com ${tentativas} tentativas.`);
    } else {
        if (chute > numeroSecreto) {
            alert(`O número secreto é menor que ${chute}`);
        } else {
            alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;
    }
}