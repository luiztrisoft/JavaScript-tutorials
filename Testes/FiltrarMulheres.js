let homens = [
  {"id": 10, "nome": "Luiz"} 
];

let objetos = [
  {"id": 10, "nome": "Luiz"},
  {"id": 20, "nome": "Helia"},
  {"id": 30, "nome": "Eva"},
  {"id": 40, "nome": "Barbara"}
];

let idsHomensSelecionados = homens && homens.length > 0 ? homens.map(obj => obj.id) : [];
let mulheres = objetos.filter(item => !idsHomensSelecionados.includes(item.id));

console.log(idsHomensSelecionados); 
console.log(mulheres); 

/*SAIDA
[10]
[{...},{...},{...}]  Array somente com mulheres
*/
