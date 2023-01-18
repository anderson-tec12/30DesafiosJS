/*
  Escreva uma função que receba uma string e retorne a maior letra segundo a ordem 
  alfabeticaem minusculo. Assuma que a string não possui nenhuma letra com acento,
  numero ou caractere especial, apenas letras e espaços

*/

function letter(str:string){
  const letterInOrderAscToTableASCI = str.toLowerCase().split('').sort()

 return letterInOrderAscToTableASCI[letterInOrderAscToTableASCI.length - 1]
}


console.log(letter('Lorem ipsum dolore sec avanti'))
console.log(letter('Hello'))
console.log(letter('May the force be with you'))
console.log(letter('Its over nine thousand'))