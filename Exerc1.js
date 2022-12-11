// Faça um algoritmo que leia a idade de vários alunos de uma turma.
// O programa vai parar quando for digitada a idade 999. No final,
// mostre quantos alunos existem na turma e qual é a média de idade
// do grupo

let idadeTurma = [];
let idade = 0;
let qtdAlunos = 0;
let soma = 0;
let mediaIdade = 0;

while (idade !== 999) {
    idade = parseInt(prompt('Digite sua idade ou 999 para encerrar.'));
    idadeTurma.push(idade);
}

// alunos = idadeTurma.length-1;
// metódo pop remove o último item do array
let removeItem = idadeTurma.pop();
qtdAlunos = idadeTurma.length;

for (let i in idadeTurma) {
    soma += idadeTurma[i];
}

mediaIdade = soma/idadeTurma.length;

document.write(`A quantidade de alunos é ${qtdAlunos}. </br>`);
document.write(`E a média de idade de alunos é ${mediaIdade.toFixed(2)}`);
