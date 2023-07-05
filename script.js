const button = document.querySelector(".btn-add");
const tarefa = document.querySelector(".tarefas");
const textoTarefa = document.querySelector(".input-tarefa");

function criaP(){ //clicar no botão concluido
   // const elemento =e.target;
    const p =document.createElement("p"); //criar elemento HTML
    p.setAttribute("class", "apagar")
    p.setAttribute("contenteditable", "false");
    tarefa.appendChild(p); //dizendo que o li é filho de tarefa(ul)
    //p.innerHTML = "teste";
    return p;
}

function enviaTarefa(){
    const p = criaP();
    p.innerHTML = textoTarefa.value;
}

button.addEventListener("click", function(e){
    enviaTarefa();
    limpaInput();
})

function limpaInput(){
    textoTarefa.value = "";
    textoTarefa.focus();
}