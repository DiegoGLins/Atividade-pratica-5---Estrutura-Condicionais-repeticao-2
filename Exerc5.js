// Faça um algoritmo que pergunte a distância que um passageiro
// deseja percorrer em Km. Calcule o preço da passagem, cobrando
// R$0.50 por Km para viagens até 200Km e R$0.45 para viagens mais
// longas


let distPercorrida = parseFloat(prompt('Digite a distância a ser percorrida em Km:'))
let priceTicketAt200 = 0.50;
let priceTicketMore200 = 0.45;
let priceTotalticket = 0;

if(distPercorrida <= 200){
priceTotalticket =  distPercorrida * priceTicketAt200;
}
else {
priceTotalticket = distPercorrida * priceTicketMore200;    
}
console.log(priceTotalticket)