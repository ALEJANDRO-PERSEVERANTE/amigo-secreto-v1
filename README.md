
// Declaración del arreglo para almacenar los nombres de los amigos
let amigos = [];
/*
   - amigos: Es un arreglo vacío que se utilizará para almacenar los nombres de los amigos.
   - Este arreglo se llenará dinámicamente a medida que el usuario agregue nombres.
*/

// Función para agregar un amigo a la lista
function agregarAmigo() {
    /*
       - Esta función captura el nombre ingresado por el usuario, lo valida, lo formatea y lo agrega al arreglo `amigos`.
       - Luego, actualiza la lista de amigos en la interfaz.
    */

    // Capturar el valor del campo de entrada
    const input = document.getElementById("amigo");
    /*
       - input: Es una referencia al elemento del DOM (Document Object Model) que tiene el ID "amigo".
       - Este elemento es un campo de texto donde el usuario ingresa el nombre del amigo.
    */

    let nombre = input.value.trim();
    /*
       - nombre: Almacena el valor del campo de entrada, eliminando espacios innecesarios al principio y al final con `.trim()`.
       - Esto evita que se agreguen nombres vacíos o con espacios adicionales.
    */

    // Validar la entrada
    if (nombre === "") {
        alert("Por favor, inserte un nombre.");
        return; // Detener la función si el campo está vacío
    }
    /*
       - Si el campo de entrada está vacío, se muestra una alerta y la función se detiene con `return`.
       - Esto evita que se agreguen nombres vacíos al arreglo `amigos`.
    */

    // Validar que el nombre sea un nombre propio
    if (!/^[A-Za-zÁÉÍÓÚáéíóúÑñ\s]+$/.test(nombre)) {
        alert("Por favor, ingrese un nombre válido (solo letras y espacios).");
        return; // Detener la función si el nombre no es válido
    }
    /*
       - Se usa una expresión regular para validar que el nombre solo contenga letras (mayúsculas, minúsculas, caracteres especiales en español) y espacios.
       - Si el nombre no cumple con este formato, se muestra una alerta y la función se detiene.
    */

    // Formatear el nombre: Primera letra en mayúscula y el resto en minúsculas
    nombre = formatearNombre(nombre);
    /*
       - Llama a la función `formatearNombre(nombre)` para asegurarse de que el nombre esté bien escrito.
       - Esto convierte la primera letra de cada palabra en mayúscula y el resto en minúsculas.
    */

    // Añadir el nombre al arreglo de amigos
    amigos.push(nombre);
    /*
       - El nombre formateado se agrega al arreglo `amigos` usando `amigos.push(nombre)`.
       - Esto actualiza la lista de amigos en memoria.
    */

    // Limpiar el campo de entrada
    input.value = "";
    /*
       - El campo de entrada se vacía para permitir que el usuario ingrese un nuevo nombre.
    */

    // Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();
    /*
       - Llama a la función `actualizarListaAmigos()` para reflejar los cambios en la interfaz.
    */
}

// Función para formatear un nombre (primera letra en mayúscula y el resto en minúsculas)
function formatearNombre(nombre) {
    /*
       - Esta función toma un nombre y lo formatea para que la primera letra de cada palabra esté en mayúscula y el resto en minúsculas.
    */

    return nombre
        .toLowerCase() // Convertir todo a minúsculas
        .split(" ") // Dividir el nombre en partes (por si es un nombre compuesto)
        .map((palabra) => palabra.charAt(0).toUpperCase() + palabra.slice(1)) // Primera letra en mayúscula
        .join(" "); // Unir las partes nuevamente
    /*
       - `toLowerCase()`: Convierte todo el nombre a minúsculas.
       - `split(" ")`: Divide el nombre en un arreglo de palabras, usando el espacio como separador.
       - `map()`: Itera sobre cada palabra y convierte la primera letra en mayúscula.
       - `join(" ")`: Une las palabras nuevamente en un solo string, separadas por espacios.
    */
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarListaAmigos() {
    /*
       - Esta función actualiza la lista de amigos en la interfaz, mostrando los nombres almacenados en el arreglo `amigos`.
    */

    // Obtener el elemento de la lista
    const listaAmigos = document.getElementById("listaAmigos");
    /*
       - listaAmigos: Es una referencia al elemento del DOM que tiene el ID "listaAmigos".
       - Este elemento es un contenedor (por ejemplo, un `<ul>`) donde se mostrarán los nombres de los amigos.
    */

    // Limpiar la lista existente
    listaAmigos.innerHTML = "";
    /*
       - Se vacía el contenido actual de la lista para evitar duplicados.
    */

    // Iterar sobre el arreglo de amigos y agregar cada nombre a la lista
    amigos.forEach((amigo) => {
        const item = document.createElement("li");
        item.textContent = amigo;
        listaAmigos.appendChild(item);
    });
    /*
       - `amigos.forEach()`: Itera sobre cada nombre en el arreglo `amigos`.
       - `item`: Crea un nuevo elemento `<li>` para cada nombre.
       - `item.textContent = amigo`: Asigna el nombre del amigo al contenido del elemento `<li>`.
       - `listaAmigos.appendChild(item)`: Agrega el elemento `<li>` al contenedor `listaAmigos`.
    */
}

// Función para sortear un amigo secreto
function sortearAmigo() {
    /*
       - Esta función selecciona un nombre aleatorio del arreglo `amigos` y lo muestra como el "amigo secreto".
    */

    // Validar que haya amigos disponibles
    if (amigos.length === 0) {
        alert("No hay amigos en la lista. Por favor, añada algunos nombres.");
        return; // Detener la función si no hay amigos
    }
    /*
       - Si el arreglo `amigos` está vacío, se muestra una alerta y la función se detiene.
    */

    // Generar un índice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length);
    /*
       - `Math.random()`: Genera un número aleatorio entre 0 y 1.
       - `Math.floor()`: Redondea el número hacia abajo para obtener un índice válido.
       - `indiceAleatorio`: Es un número aleatorio entre 0 y la longitud del arreglo `amigos`.
    */

    // Obtener el nombre sorteado
    const amigoSorteado = amigos[indiceAleatorio];
    /*
       - `amigoSorteado`: Es el nombre del amigo correspondiente al índice aleatorio.
    */

    // Mostrar el resultado en la interfaz
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = `<li>¡El amigo secreto es: <strong>${amigoSorteado}</strong>!</li>`;
    /*
       - `resultado`: Es una referencia al elemento del DOM que tiene el ID "resultado".
       - `resultado.innerHTML`: Muestra el nombre del amigo sorteado en un formato HTML.
    */
}

// Función para reiniciar la lista de amigos y el resultado
function reiniciarLista() {
    /*
       - Esta función vacía el arreglo `amigos`, limpia la lista en la interfaz y borra el resultado del sorteo.
    */

    // Limpiar el arreglo de amigos
    amigos = [];
    /*
       - Se vacía el arreglo `amigos`.
    */

    // Actualizar la lista de amigos en la interfaz
    actualizarListaAmigos();
    /*
       - Llama a la función `actualizarListaAmigos()` para reflejar que no hay amigos en la interfaz.
    */

    // Limpiar el campo de resultado
    const resultado = document.getElementById("resultado");
    resultado.innerHTML = "";
    /*
       - `resultado.innerHTML = ""`: Limpia el contenido del contenedor de resultados.
    */
} -->
