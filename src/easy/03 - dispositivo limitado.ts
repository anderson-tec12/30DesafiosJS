/*
  Escreva um função que recebe um array e retorne um novo valor com todas as 
  posiçoes invertidas do original sem altera-lo, não utilize metodos do objeto 
  global array (map, reverse,forEach, etc)
*/


function inveterPosition(list:number[] | string[] |  boolean[] | any[]){
  const quantityItensToList = list.length - 1
  const arrayInverse = []

  for(let position = quantityItensToList; position >= 0; position-- ){
    const oneItemArray = list[position]
    arrayInverse.push(oneItemArray)
  }

  return {
    original:list,
    modify:arrayInverse
  }
}


console.log(inveterPosition([0,9,6,8,9,1,5,7]))
console.log(inveterPosition(["oh","hi","mark"]))
console.log(inveterPosition([false,true,true,true]))
console.log(inveterPosition(["ut's", "not", true, 0]))