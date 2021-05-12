//for in (objeto)
var objeto = {nome: "Luiz", idade: 34, sobrenome: "Alberto"}
for(var prop in objeto){
  console.log("Atributo " + prop + " = " + objeto[prop])
}

console.log('-----------------------------------------')

//for of (array)
var dias = ["Sabado", "Domingo"]
for (var elemento of dias){
  console.log("Elemento do array: " + elemento)
}

/*SAIDA
Atributo nome = Luiz
Atributo idade = 34
Atributo sobrenome = Alberto
-----------------------------------------
Elemento do array: Sabado
Elemento do array: Domingo
*/