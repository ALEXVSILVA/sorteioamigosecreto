let amigos = [];

function listarAmigos() {
    let lista = document.getElementById("amigoSecreto");
    lista.textContent = "";
    amigos.forEach((amigo) => { 
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    });
}

function adicionarAmigo() {
    let nome = document.getElementById("nome").value.trim();
    if (nome === "") {
        alert("Digite um nome válido");
        return;
    }
    amigos.push(nome);
    listarAmigos();
    document.getElementById("nome").value = "";
}

function sortearAmigo() {
    if (amigos.length >= 2) {
        let sorteado = amigos[Math.floor(Math.random() * amigos.length)];
        let resultado = document.getElementById("resultado");
        resultado.innerText = `Amigo sorteado foi: ${sorteado}`;
      
    } else {
        alert("Adicione pelo menos 2 pessoas para sortear");
    }
}