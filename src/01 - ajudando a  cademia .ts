/*
  Escreva uam função que recebe um numero qualquer de numeros inteiros como argumentos e retorne a 
  média aritimetica entre eles
*/


function calc_media(numbers:number[]){
  const calc:{divisor:number,total:number} = numbers.reduce((acc,value) => {
    
    acc.total+= value 
    
    if(value > 0){
      acc.divisor+=  1
    }

    return acc
  },{divisor:0,total:0})

  return calc.total / calc.divisor
}


const testeA = [10,9,6,8,9,1,5,7]
const testeB = [2,7,1,-2]
const testeC = [10,10,10,10,9]
const testeD = [25,75]


const saidaA = 6.875
const saidaB = 2.6
const saidaC = 9.8 
const saidaD = 50


console.log(`Valores de entrada ${testeA}, saida esperada ${saidaA} resultado final ${calc_media(testeA)} ${calc_media(testeA) === saidaA}`)
console.log(`Valores de entrada ${testeB}, saida esperada ${saidaB} resultado final ${calc_media(testeB)} ${calc_media(testeB) === saidaB}`)
console.log(`Valores de entrada ${testeC}, saida esperada ${saidaC} resultado final ${calc_media(testeC)} ${calc_media(testeC) === saidaC}`)
console.log(`Valores de entrada ${testeD}, saida esperada ${saidaD} resultado final ${calc_media(testeD)} ${calc_media(testeD) === saidaD}`)