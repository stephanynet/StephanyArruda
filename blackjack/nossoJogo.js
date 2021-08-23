/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */

   console.log("Bem vindo ao jogo de Blackjack!")

if (confirm("Quer inciar uma rodada?")) {

   const jogadaUsuario = comprarCarta()
   const jogadaComputador = comprarCarta()

   console.log("jogada1 - cartas " + (jogadaUsuario.texto) + (jogadaComputador.texto) + " + pontuação " + (jogadaUsuario.valor + jogadaComputador.valor))

   const jogadaUsuario2 = comprarCarta()
   const jogadaComputador2 = comprarCarta()

   console.log("jogada2 - cartas " + (jogadaUsuario2.texto) + (jogadaComputador2.texto) + " + pontuação " + (jogadaUsuario2.valor + jogadaComputador2.valor))

   jogada1ValorTotal = (jogadaUsuario.valor + jogadaComputador.valor)

   jogada2ValorTotal = (jogadaUsuario2.valor + jogadaComputador2.valor)

   if (jogada1ValorTotal === jogada2ValorTotal){
      console.log("Empatou!")
   } else if (jogada1ValorTotal < jogada2ValorTotal){
      console.log("O computador ganhou!")
   } else if (jogada1ValorTotal > jogada2ValorTotal){
      console.log("O usuário ganhou!")
   }

} else {
   console.log("O jogo acabou!") 
}
// else O jogo acabou não está funcionando, lembrar de corrigir 

