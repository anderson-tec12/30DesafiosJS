/*
  Escreva uma função que recebe uma string contendo um nome completo e retorna
  uma string com todos os nomes, exceto o ultimo, abreviados e o ultimo nom em 
  letras maisculas antes das abreviações separado por virgula
*/

function exec(value:string){
  const stringToArray = value.split(' ')

  const arrayFormatted = stringToArray.reduce((acc, el,index, currentArray) => {
    const lastValue = index === (currentArray.length - 1 )
    
    if(lastValue){
      acc = `${el.toUpperCase()}, ${acc}`
      
      return acc
    }

    const currentLetter = el[0]
    acc+= `${currentLetter}.`

    return acc
  },'')

  return arrayFormatted
}




console.log(exec('Isaac Larrubia Ferreira Pontes'));
console.log(exec('John Ronald Reuel Tolkien'));
console.log(exec('christopher james paolini'));
console.log(exec('Suzanne Marie Collins'));