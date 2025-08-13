// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function limpiarInput(elemento) {
   return document.querySelector(elemento).value = '';
}

function actualizarLista() {
    // 1️ Obtener el elemento de la lista
    let lista = document.getElementById('listaAmigos');

    // 2️ Limpiar la lista existente
    lista.innerHTML = '';

    // 3️ Iterar sobre el arreglo
    for (let i = 0; i < amigos.length; i++) {
        // 4️ Crear un nuevo li para cada amigo
        let li = document.createElement('li');
        li.textContent = amigos[i];

        // Agregar el li a la lista
        lista.appendChild(li);
    }
}

function agregarAmigo() {
    let input = document.getElementById('amigo');
    let nombre = input.value.trim();

    if (nombre === '') {
        alert('Por favor, inserte un nombre.');
        return;
    }

    amigos.push(nombre);
    actualizarLista();
    limpiarInput('#amigo');
}


function sortearAmigo() {
    // 1️⃣ Validar que el arreglo no esté vacío
    if (amigos.length === 0) {
        alert('No hay amigos para sortear');
        return;
    }

    // 2️⃣ Generar un índice aleatorio
    let indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // 3️⃣ Obtener el nombre sorteado
    let amigoSorteado = amigos[indiceAleatorio];
    amigos.splice(indiceAleatorio, 1);

    // 4️⃣ Mostrar el resultado
    let listaResultado = document.getElementById('resultado');
    listaResultado.innerHTML = ""; // Limpiar lista anterior
    let li = document.createElement('li');
    li.textContent = amigoSorteado;
    listaResultado.appendChild(li);
}
