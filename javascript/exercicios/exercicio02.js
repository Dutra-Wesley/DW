let input = require('prompt-sync')();

let time1 = input('Informe o nome do primeiro time: ')
let golsTime1 = Number(input('Informe a quantidade de gols do ' + time1 + ': '))
let time2 = input('Informe o nome do segundo time: ')
let golsTime2 = Number(input('Informe a quantidade de gols do ' + time2 + ": "))

if (golsTime1 > golsTime2) {
    
    console.log('O vencedor foi o ' + time1)

} else if (golsTime1 < golsTime2) {
    
    console.log('O vencedor foi o ' + time2)

} else {

    console.log('Houve um impate na partida!')

}