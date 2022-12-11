// Faça um programa que leia a largura e o comprimento de um
// terreno retangular, calculando e mostrando a sua área em m². O
// programa também deve mostrar a classificação desse terreno, de
// acordo com a lista abaixo:
// Abaixo de 100m² = TERRENO POPULAR
// Entre 100m² e 500m² = TERRENO MASTER
// Acima de 500m² = TERRENO VIP

let largTerreno = parseFloat(prompt("Digite a largura do terreno:"));
let compTerreno = parseFloat(prompt("Digite o comprimento do terreno:"));
let areaTerreno = largTerreno * compTerreno;

if (areaTerreno <= 100) {
  document.write(`Área do terreno: ${areaTerreno} M² - TERRENO POPULAR`);
} else if (areaTerreno > 100 && areaTerreno <= 500) {
  document.write(`Área do terreno: ${areaTerreno} M² - TERRENO MASTER`);
} else {
  document.write(`Área do terreno: ${areaTerreno} M² - TERRENO VIP`);
}
