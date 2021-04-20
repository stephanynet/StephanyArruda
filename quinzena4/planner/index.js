  
function criarTarefa() {
    const meuInput = document.getElementById("tarefa").value
    const diaDaSemana = document.getElementById("dias-semana").value
    console.log(criarTarefa)

    if(meuInput === ""){
        alert("Insira uma tarefa!")
    }
    
    diaDaSemana.innerHTML += `<p>${meuInput}</p>` 
    meuInput = "" 

if ( meuInput.value !== "" ){
    const task = document.getElementById(diaDaSemana.value)

}else {
    alert("Informe uma tarefa para adicionar!")
}
}