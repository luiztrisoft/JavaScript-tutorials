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

//Filtrar o objeto se ele não estiver incluído na lista de ids selecionados
let mulheres = objetos.filter(obj => !idsHomensSelecionados.includes(obj.id));

console.log(idsHomensSelecionados); 
console.log(mulheres); 

/*SAIDA
[10]
[{...},{...},{...}]  Array somente com mulheres
*/
