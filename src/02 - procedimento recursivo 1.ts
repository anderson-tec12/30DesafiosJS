/*
  Escreva uma função que recebe um numero e retorna uma 
  quantidate equivalenrede chunks separados por traços -
  sem usar nenhuma estrutra de repetição

*/

let nameValue = ""


function exec(qtd:number){
  let qtdExected = 0

  loop(qtdExected, qtd)

  console.log('Resultado com ',qtd, 'repetições',nameValue)
  nameValue=""
}

function loop(control:number, limit:number){

  let controlLoop = control + 1 
  
  if(limit >=  controlLoop){
    nameValue+= nameValue ? "-chunks" : "chunks"
     loop(controlLoop, limit)
  }
}

exec(4)
exec(1)
exec(8)
exec(2)