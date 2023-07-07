const button = document.querySelector(".btn-add");
const tarefa = document.querySelector(".tarefas");
const textoTarefa = document.querySelector(".input-tarefa");

function criaP(){ //clicar no botão concluido
    const p =document.createElement("p"); //criar elemento HTML
    p.setAttribute("class", "tarefa")
    p.setAttribute("contenteditable", "false");
    tarefa.appendChild(p); 
    return p;
}

function enviaTarefa(textoInput){
    const p = criaP();
    p.innerHTML = textoInput;
}

button.addEventListener("click", function(e){
    enviaTarefa(textoTarefa.value);
    limpaInput();
    salvarStorage();
})

function limpaInput(){
    textoTarefa.value = "";
    textoTarefa.focus();
}

function salvarStorage(){
    const pTarefas= tarefa.querySelectorAll("p");
    const listaTarefa = [];

    for(let valor of pTarefas){
        let tarefaTexto = valor.innerText;
        tarefaTexto = tarefaTexto.replace("apagar", "").trim();//replace para apagar palavra indicada, e trim para apagar espaço vazio
        console.log(tarefaTexto);
        listaTarefa.push(tarefaTexto);//adicionar ao final do array
    }
    const tarefasJSON = JSON.stringify(listaTarefa);
    localStorage.setItem("tarefas", tarefasJSON); 
}

function adicionaTarefasSalvas(){
    const tarefas =localStorage.getItem("tarefas");
    const listaTarefa = JSON.parse(tarefas);

    for (let tarefa of listaTarefa){
        enviaTarefa(tarefa);
    }
}

adicionaTarefasSalvas();