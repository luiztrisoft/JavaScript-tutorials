let caracteres = ['A', 'B', 'A', 'C', 'B']

//Set
//let caracteresUnicos = [...new Set(caracteres)]

//Filter e indexOf
//let caracteresUnicos = caracteres.filter((c, index)=>{return caracteres.indexOf(c)===index;});

//For each e include
let caracteresUnicos = [];
caracteres.forEach((c) => {
  if(!caracteresUnicos.includes(c)){
    caracteresUnicos.push(c)
  }
})

//Reduce
let caracteresUnicos = caracteres.reduce(function(accumulator, value){
  if(accumulator.indexOf(value) === -1){
    accumulator.push(value)
  }
  return accumulator
}, [])


//saida: ["A" ,"B" ,"C"] 


console.log(caracteresUnicos)