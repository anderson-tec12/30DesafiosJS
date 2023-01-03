/*
  Escreva uam função que recebe um numero qualquer de numeros inteiros como argumentos e retorne a 
  média aritimetica entre eles
*/


function calc_media(numbers:number[]){
  const calc:{divisor:number,total:number} = numbers.reduce((acc,value) => {
    
    acc.total+= value 
    acc.divisor+= 1

    return acc
  },{divisor:0,total:0})

  return calc.total / calc.divisor
}


console.log(calc_media([10,10,10]))