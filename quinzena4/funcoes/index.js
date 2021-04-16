/* EXERCÍCIO 01

Resposta a:
Imprime 10 na primeira linha e 50 na segunda linha.

Resposta b:
Sem o console.log não irá imprimir nada.
*/

/* EXERCÍCIO 02

Resposta a:
O console imprime Darvas e Caio.

Resposta b:
O console imprime Amanda e Caio.
*/

/* EXERCÍCIO 03
A função retorna o resultado final, poderia ter o nome de resultadoFinal.
*/

/* EXERCÍCIO 04

Resposta a:
function MeusDados() {
    return "Meu nome é Stephany, tenho 23 anos, moro em Poços de Caldas e sou estudante"
}
const imprimirMeusdados = MeusDados()
console.log(imprimirMeusdados)
}

Resposta b:

let MeusDados = (nome, idade, cidade, souNao) => {
    if (souNao === true) {
        souNao = "sou estudante"
    } else {souNao = "não sou estudante"}
}

let imprimirMeusdados = MeusDados("Lais", 23, "São Paulo", true)
console.log(imprimirMeusdados)
*/

/* EXERCÍCIO 05

Resposta a:
let somar = (a, b) => {
    let soma = a + b
    return soma
}
const resultadoSoma = somar(5,5)
console.log(resultadoSoma)

Resposta b: 
let somar = (a, b) => {
    if (a >= b) {
        return true
    } else { return false}
}
let resultado = somar(8,2)
console.log(resultado)

Resposta c:
let mensagemString = (mensagem) => {
    for (let i = 0; i < 10; i++ ) {
        console.log(mensagem)
    }
}
const resultado = mensagemString("mensagem de string")
console.log(resultado)
*/
