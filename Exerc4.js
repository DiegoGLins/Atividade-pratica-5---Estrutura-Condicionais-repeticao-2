// Numa promoção exclusiva para o Dia da Mulher, uma loja quer dar
// descontos para todos, mas especialmente para mulheres. Faça um
// programa que leia nome, sexo e o valor das compras do cliente e
// calcule o preço com desconto. Sabendo que:
// a. Homens ganham 5% de descontob. Mulheres ganham 13% de desconto

const nomeCliente = prompt("Digite o nome do cliente: ");
let sexo = prompt("Digite: \n M - Masculino \n F - Feminino");
let totalCompra = parseFloat(prompt('Digite o valor total da compra do cliente'))

switch (sexo) {
    case "m":
    case "M":
    totalCompra = totalCompra - (totalCompra * 0.05);
    document.write(`O valor total da compra é de:  ${totalCompra}`)
    break;

    case "f":
    case "F":
    totalCompra = totalCompra - (totalCompra * 0.13);
    document.write(`O valor total da compra é de:  ${totalCompra}`)
    break;

  default:
    document.write('Digite uma opção válida para sexo')
    break;
}
