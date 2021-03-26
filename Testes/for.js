//for in 
var objeto = {nome: "Luiz", idade: 34, sobrenome: "Alberto"}
for(var prop in objeto){
  console.log("Atributo " + prop + " = " + objeto[prop])
}

//for of
var dias = ["Sabado", "Domingo"]
for (var elemento of dias){
  console.log("Elemento do array: " + elemento)
}