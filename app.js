//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.

//Criação da lista;
let amigos = [];

// Função para adicionar amigos;
function adicionarAmigo() {
    // Captura o valor do campo de texto
    const nome = document.getElementById("amigo").value.trim();

    // Valida se o campo está vazio
    if (nome === "") {
        alert("Por favor, insira um nome.");
        return;
    }

    // Adiciona o nome ao array de amigos
    amigos.push(nome);

    // Atualiza a lista de amigos na interface
    atualizarListaDeAmigos();

    // Limpa o campo de entrada
    document.getElementById("amigo").value = "";
}


//Função para atualizar a lista de amigos na interface:
function atualizarListaDeAmigos() {
    // Obtém o elemento da lista HTML onde os amigos serão exibidos
    const lista = document.getElementById("listaAmigos");

    // Limpa a lista existente
    lista.innerHTML = "";

    // Percorre o array de amigos e adiciona cada nome como <li>
    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement("li");
        li.textContent = amigos[i]; // Define o nome do amigo como conteúdo do <li>
        lista.appendChild(li); // Adiciona o <li> à lista
    }
}


// Função para selecionar um amigo aleatoriamente e exibir o resultado:
function sortearAmigo() {
    // Verifica se há amigos suficientes para o sorteio
    if (amigos.length === 0) {
        alert("Adicione amigos para realizar o sorteio.");
        return;
    }

    // Gera um índice aleatório
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtém o nome do amigo sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Exibe o nome sorteado na tela
    document.getElementById("resultado").innerHTML = `Amigo sorteado: ${amigoSorteado}`;
}
