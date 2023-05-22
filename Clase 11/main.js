///LOCALSTORAGE

// console.log(localStorage);

// localStorage.setItem("nombre", "andres");
// localStorage.setItem("numero", "5");
// localStorage.setItem("valor", "true");

// let nombre = localStorage.getItem("nombre");
// console.log(nombre);

// let numero = localStorage.getItem("numero");
// console.log(numero);

// let valor = localStorage.getItem("valor");
// console.log(valor);

//SESSIONSTORAGE
// sessionStorage.setItem("nombre", "andres");
// sessionStorage.setItem("numero", "5");
// sessionStorage.setItem("valor", "true");

// for(let i = 0; i < localStorage.length; i++){
//   let clave = localStorage.key(i);

//   console.log("clave", clave);
//   console.log("valor", localStorage.getItem(clave));
// }

//ELIMINAR EL STORAGE
// localStorage.removeItem("nombre"); // Elimina un elemento por su clave
// localStorage.clear(); // Elimina todo el storage

// let arreglo = [1, 2, 3, 5];
// let objeto = {
//   nombre: "andres",
//   edad: 12,
// };

// localStorage.setItem("arreglo", JSON.stringify(arreglo));
// localStorage.setItem("objeto", JSON.stringify(objeto));

// let objeto = JSON.parse(localStorage.getItem("objeto"));
// console.log(objeto.nombre);

// let arreglo = localStorage.getItem("arreglo");
// console.log(JSON.parse(arreglo));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
//   { id: 3, nombre: "gorra", precio: 1000 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];

// const guardar = (clave, valor) => {
//   localStorage.setItem(clave, valor);
// }

// productos.forEach(item => {
//   guardar(item.id, JSON.stringify(item));
// });

// localStorage.setItem("carrito", JSON.stringify(productos));

//EJEMPLOS

// let usuario;
// let usuarioStorage = sessionStorage.getItem("usuario");

// if (usuarioStorage) {
//   usuario = usuarioStorage;
//   alert(`Bienvenid@ ${usuario} nuevamente`);
// } else {
//   usuario = prompt("Ingrese el usuario");
//   alert(`Bienvenid@ ${usuario} eres nuevo`);
//   sessionStorage.setItem("usuario", usuario);
// }

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
//   { id: 3, nombre: "gorra", precio: 1000 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];

// localStorage.setItem("carrito", JSON.stringify(productos));

let contenedor = document.getElementById("contenedor");
contenedor.className = "clase";
let carrito = [];
let carritoStorage = localStorage.getItem("carrito");

if (carritoStorage) {
  carrito = JSON.parse(carritoStorage);
} else {
  let div = document.createElement("div");
  div.innerHTML = "El carrito está vacío";
  document.body.append(div);
}

carrito.forEach((item) => {
  let div = document.createElement("div");
  div.innerHTML = `
    <h2>Id: ${item.id}</h2>
    <p>Nombre: ${item.nombre}</p>
    <b>$${item.precio}</b>
    <hr />
  `;
  contenedor.append(div);
});

boton.addEventListener("click", () => {
  localStorage.clear();
  alert("carrito eliminado");
  location.reload();
});
