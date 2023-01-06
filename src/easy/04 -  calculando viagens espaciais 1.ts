/*
  Escreva uma função que recebe um numero inteiro qualquer,
  eleve ao quadrado cada um de seus algarismos e depois 
  concatene o resultado retornando um único numero inteiro
*/


function toSquare(values:number){
  const valuesToString = values.toString().split('')
  
  const result = valuesToString.reduce((acc, value) => {
    const toPower = Math.pow(+value, 2).toString()

    acc+= toPower

    return acc

  }, '')

  return +result
}

const testA = toSquare(3514)
const testB = toSquare(94571)
const testC = toSquare(24)
const testD = toSquare(745821698)

console.log(`Entrada A 3514, Saida ${testA}, resultado esperado 925116`)
console.log(`Entrada B 94571 Saida ${testB}, resultado esperado 811625494`)
console.log(`Entrada C 24 Saida ${testC}, resultado esperado 416`)
console.log(`Entrada D 745821698 Saida ${testD}, resultado esperado 4916256441368164`)