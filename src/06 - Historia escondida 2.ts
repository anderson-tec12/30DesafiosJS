/*
  Escreva uma função que receba uma string e retorne a a frase com cada palavra
  invertida sem troca a sequencia de palavras da frase

*/

function Reverse(str:string){

  const letterInOrderAscToTableASCI = str.toLocaleLowerCase().split(' ').reduce((acc, value) => {
    const valueReserver = value.split('').reverse().join('');
    acc+= `${valueReserver} `
    return acc
  }, '')

 return letterInOrderAscToTableASCI
}


console.log(Reverse('Lorem ipsum dolore sec avanti'))
console.log(Reverse('This is an apple'))
console.log(Reverse('May the force be with you'))
console.log(Reverse('It s over nine thousand'))
