// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.



// Aqui basicamente se hace la logica de la aplicacion, se crean las funciones que se van a utilizar en el index.html.
const inputAmigo = document.getElementById("amigo");
const listaAmigos = [];
const ulListaAmigos = document.getElementById("listaAmigos");
const ulResultado = document.getElementById("resultado");

// en nuestro index.html, en el boton de agregar amigo, se llama a la funcion agregarAmigo().
function agregarAmigo() {
    const nombreAmigo = inputAmigo.value.trim();
    if (nombreAmigo === "") {
        alert("Por favor, escribe un nombre.");
        return;
    }

    listaAmigos.push(nombreAmigo);
    const li = document.createElement("li");
    li.textContent = nombreAmigo;
    ulListaAmigos.appendChild(li);
    inputAmigo.value = "";
}

// Aqui se hace el sorte de nuestro amigo.
function sortearAmigo() {
    if (listaAmigos.length < 2) {
        alert("Necesitas al menos dos amigos para sortear.");
        return;
    }

    const shuffled = listaAmigos.slice().sort(() => Math.random() - 0.5);
    ulResultado.innerHTML = "";
    for (let i = 0; i < shuffled.length; i++) {
        const li = document.createElement("li");
        li.textContent = `${shuffled[i]} le regala a ${shuffled[(i + 1) % shuffled.length]}`;
        ulResultado.appendChild(li);
    }
}

//Gracias por ver.
// PD: Espero pasar a la siguiente fase xd.