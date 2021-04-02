/* Respostas 1:

a) false
b) false
c) true
d) booleano
*/

/* Respostas 2:

a) undefined
b) null
c) 11
d) array [0]
e) array [3, 19, 5, 6, 7, 8, 9, 10, 11, 12, 13]
f) valor 9
*/

// Escrita de código: Respostas 1. a, b, c, d, e //

let idade = prompt("Qual é a sua idade?")
console.log (idade)

let idadeMelhorAmigo = prompt ("Qual é a idade do seu melhor amigo (a)?")
console.log(idadeMelhorAmigo);

let resposta = Number(idade) > Number(idadeMelhorAmigo)

let diferenca = Number(idade) - Number (idadeMelhorAmigo)

console.log("Sua idade é maior do que a do seu melhor amigo?" + resposta + diferenca)

// Escrita de código: Respostas 2. a e b //

let numeroPar = prompt("Digite um número par")
let resultado = Number(numeroPar) / 2
console.log(resultado) */

/* Escrita de código: Respostas 2. c e d)
Notei que os resultados dividem corretamente, tanto para números pares como também os ímpares */

// Escrita de código: Respostas 3. a, b, c, d, e, f //

let listaDeTarefas = []

let primeiraTarefa = prompt ("De três tarefas do dia, qual é sua primeira tarefa?")
console.log (primeiraTarefa)

let segundaTarefa = prompt ("De três tarefas do dia, qual é sua segunda tarefa?")
console.log (segundaTarefa)

let terceiraTarefa = prompt ("De três tarefas do dia, qual é sua terceira tarefa?")
console.log (terceiraTarefa)

listaDeTarefas.push(primeiraTarefa)
listaDeTarefas.push(segundaTarefa)
listaDeTarefas.push(terceiraTarefa)

let indice = prompt(" Qual tarefa você já realizou? Digite 0, 1 ou 2 ")

console.log(primeiraTarefa + terceiraTarefa)

// Escrita de código: Resposta 4. //

let nomeDoUsuario = prompt("Digite seu nome")

let emailDoUsuario = prompt("Digite seu e-mail")

console.log ("O e-mail" + emailDoUsuario + "foi cadastrado com sucesso. Seja bem vinda (o)," + nomeDoUsuario) + "!"
