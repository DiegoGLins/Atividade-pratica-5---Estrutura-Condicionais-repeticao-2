// Desenvolva um aplicativo que leia o salário e o sexo de vários
// funcionários. No final, mostre o total de salários pagos aos homens e
// o total pago às mulheres. O programa vai perguntar ao usuário se
// ele quer continuar ou não sempre que ler os dados de um
// funcionário.

let salarioM = 0;
let salarioF = 0;

let conectado = "s";

while (conectado == "s") {
  let sexo = prompt("Infome o seu sexo: \n M - Masculino \n F - Feminino");
  sexo.toLocaleLowerCase();
  let salario = parseFloat(
    prompt("Informe o salário em R$ ")
  );

  if (sexo == "m") {
    sexo = "Masculino";
    salarioM = salario + salarioM;
  }

  if (salario <= 0) {
    document.write(
      "Digite um valor válido maior do que 0 para salário!" + "<br/>"
    );
  } 

  if (sexo == "f") {
    sexo = "Feminino";
    salarioF = salario + salarioF;
  }

  if (salario <= 0) {
    document.write(
      "Digite um valor válido maior do que 0 para salário!" + "<br/>"
    );
  } 

  conectado = prompt(
    "Deseja incluir mais alguma informação? Digite S p/ continuar e N para finalizar o processo: [s/n]"
  ).toLocaleLowerCase();

}

if (conectado == "n") {
  document.write("Total salário HOMEM: R$ " + salarioM + "<br />");
  document.write("Total salário MULHER: R$ " + salarioF);
} else {
  document.write(
    "Opção inválida. Digite S para continuar ou N para finalizar o processo"
  );
}



