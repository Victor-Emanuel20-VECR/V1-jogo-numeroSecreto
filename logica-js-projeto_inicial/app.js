alert("Boas vindas ao jogo do número secreto!");
let numSecreto = Math.floor(Math.random() * 101);
console.log(numSecreto);
let chute = Number(prompt("Escolha um número entre 0 e 100:"));
let tentativas = 1;

while (chute != numSecreto) {
  if (chute > numSecreto) {
    alert("O número secreto é menor");
  } else if (chute < numSecreto) {
    alert("O número secreto é maior");
  }
  tentativas++;

  chute = Number(prompt("Escolha outro número:"));
}

let palavraTentativa = tentativas > 1 ? "tentativas" : "tentativa";
alert(
  `Parabéns! Você descobriu o número secreto ${numSecreto} com ${tentativas} ${palavraTentativa}.`,
);

// if (chute === numSecreto && tentativas > 1) {
//   alert(
//     `Parabéns! Você descobriu o número secreto ${numSecreto} com ${tentativas} tentativas.`,
//   );
// } else {
//   alert(
//     `Parabéns! Você descobriu o número secreto ${numSecreto} com ${tentativas} tentativa.`,
//   );
// }
