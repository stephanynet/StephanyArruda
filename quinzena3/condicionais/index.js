  
/* Resposta 1

O código pede para o usuário colocar um número, imprime a mensagem que passou no teste se o usuario colocar numeros pares, e imprime não passou no teste se o usuário colocar números impares. 

*/

  
/* Resposta 2

a) Serve para dar o preço da fruta que o usuário escolher

b) Imprime a mensagem: O preço da fruta maçã é R$ 5

c) Imprime a mesma mensagem: O preço da fruta pera é R$ 5

*/

/* Resposta 3

 a) Esta pedindo para o usuário digitar o primeiro número

 b) Se o usuário inserir 10 a mensagem no terminal é: esse número passou no teste. Se o usuário inserir o número -10 aparece a mensagem de erro.

 c) Sim. Acredito que seja porque não está específicado nesse bloco.

*/

/* Resposta 4 

let idade = Number (prompt("Qual é a sua idade?"))

if (idade >= 18) {
    console.log("Você pode dirigir")

} else {
    console.log("Você não pode dirigir")
}
*/

/* Resposta 5

let turno = prompt("Em qual turno você estuda? Digite M para matutino V para vespertino e N para noturno")

if (turno === "M"){
    console.log("Bom dia!")
} else if (turno === "V"){
    console.log("Boa tarde!")
} else if (turno === "N"){
    console.log("Boa noite!")
} else{
    console.log("Não é um turno!")
}
/*

/* Resposta 6

let turno = prompt("Em qual turno você estuda? Digite M para matutino V para vespertino e N para noturno")

switch (turno){
    case 'M':
        console.log("Bom dia!")
        break
    case 'V':
        console.log("Boa tarde!")
        break
    case 'N':
        console.log("Boa noite!")
        break
    default:
        console.log("Não é um turno!")
        break
}
*/

/* Resposta 7

let genero = prompt("Qual gênero de filme você vai assistir?")
let preco = Number(prompt("Qual é o preço do ingresso?"))

if ((genero === "fantasia") && (preco < 15)){
    console.log("Bom filme!")
} else{
    console.log("Escolha outro filme :(")
}
*/