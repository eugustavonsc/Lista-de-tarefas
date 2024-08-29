const tarefa= document.getElementById("tarefa"); //trazendo elementos do html para o codigo do js
const botao= document.getElementById("adicionar");
const listaTarefas= document.getElementById("tarefas");
botao.addEventListener("click",adcTarefa);                 // ouvir o botao e chamar a função quando clicado

function adcTarefa(){
    const textoTarefa= tarefa.value;              //obter valor que tem no campo tarefa
    if(textoTarefa.trim() !== "") {               //podemos utilizar o trim() para retirar os epaços desnecessarios
        const novaTarefa= document.createElement("li"); //criar um elemento li para inserir a tarefa na lista ul
        const checkbox= document.createElement("input");   
        checkbox.type = "checkbox";
        novaTarefa.appendChild(checkbox);
        checkbox.addEventListener("change", function() { // Adiciona um evento ao checkbox
            if (checkbox.checked) {
                novaTarefa.style.textDecoration = "line-through"; // Risca a tarefa quando o checkbox é marcado
            } else {
                novaTarefa.style.textDecoration = "none"; // Remove o risco quando o checkbox é desmarcado
            }
        });
        const texto = document.createTextNode(textoTarefa);
        novaTarefa.appendChild(texto);         
        listaTarefas.appendChild(novaTarefa);           //acrescentar tarefa no elemento pai
        tarefa.value= ""                                //limpar o campo de entrada <input>
    }   
    
    
    
    


}
