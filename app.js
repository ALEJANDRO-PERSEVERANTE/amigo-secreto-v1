// Declaración del array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    let nombre = input.value.trim();

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener la función si el campo está vacío
    }

    // Validar que el nombre sea un nombre propio
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        alert("Por favor, ingrese un nombre válido (solo letras y espacios).");
        return; // Detener la función si el nombre no es válido
    }

    // Formatear el nombre: Primera letra en mayúscula y el resto en minúsculas
    nombre = formatearNombre(nombre);

    // Añadir el nombre al array de amigos
    amigos.push(nombre);

    // Limpiar el campo de entrada
    input.value = "";

    // Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();
}

// Función para formatear un nombre (primera letra en mayúscula y el resto en minúsculas)
function formatearNombre(nombre) {
    return nombre
        .toLowerCase() // Convertir todo a minúsculas
        .split(" ") // Dividir el nombre en partes (por si es un nombre compuesto)
        .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // Primera letra en mayúscula
        .join(" "); // Unir las partes nuevamente
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById("listaAmigos");

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";

    // Iterar sobre el arreglo de amigos y agregar cada nombre a la lista
    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Por favor, añada algunos nombres.");
        return; // Detener la función si no hay amigos
    }

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];

    // Mostrar el resultado en la interfaz
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
}

// Función para reiniciar la lista de amigos (opcional)
function reiniciarLista() {
    // Limpiar el array de amigos
    amigos = [];

    // Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();

    // Limpiar el campo de resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
}