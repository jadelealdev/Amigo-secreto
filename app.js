let amigos = [];

function agregarAmigo() {
  let input = document.getElementById("amigo");
  let nombre = input.value.trim();

  if (nombre === "") {
    alert("Por favor, escribe un nombre válido.");
    return;
  }

  if (amigos.includes(nombre)) {
    alert("Ese nombre ya fue agregado.");
    return;
  }

  amigos.push(nombre);
  mostrarLista();
  input.value = "";
  input.focus();
}

function mostrarLista() {
  let lista = document.getElementById("listaAmigos");
  lista.innerHTML = "";

  amigos.forEach(function(nombre) {
    let li = document.createElement("li");
    li.textContent = nombre;
    lista.appendChild(li);
  });
}

function obtenerAmigoAleatorio(lista) {
  let indice = Math.floor(Math.random() * lista.length);
  return lista[indice];
}

function sortearAmigo() {
  let resultado = document.getElementById("resultado");
  resultado.innerHTML = "";

  if (amigos.length === 0) {
    alert("La lista está vacía. Agrega al menos un amigo.");
    return;
  }

  let seleccionado = obtenerAmigoAleatorio(amigos);

  let li = document.createElement("li");
  li.textContent = `🎉 El amigo secreto es: ${seleccionado}`;
  resultado.appendChild(li);
}


