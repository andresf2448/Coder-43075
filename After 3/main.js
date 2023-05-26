// let productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
//   { id: 3, nombre: "pantalon", precio: 1000 },
//   { id: 4, nombre: "gorra", precio: 1000 },
// ];

// productos.forEach((producto) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>Id: ${producto.id}</h2>
//     <p>Nombre: ${producto.nombre}</p>
//     <b>$${producto.precio}</b>
//     <hr />
//   `;

//   document.body.append(div);
// });

// let nombre = prompt("Ingrese el nombre del producto a buscar");
// let encontrado = productos.find((producto) => producto.nombre === nombre);

// let div = document.createElement("div");
// div.innerHTML = `
//   <h2>Id: ${encontrado.id}</h2>
//   <p>Nombre: ${encontrado.nombre}</p>
//   <b>$${encontrado.precio}</b>
//   <hr />
// `;

// document.body.append(div);

// STORAGE
/* 
LOCALSTORAGE

guarda información:
1. recarga de página
2. cerrado de página
3. apagado del computador
4. reiniciado del computador

SESSIONSTORAGE

guarda información:
1. recargado de página

para ambos tenemos lo siguiente:

setItem(clave, valor): guardar la información con la clave y el valor pasados por parametros

getItem(clave): recupera información por la clave pasada por parámetro

removeItem(clave): Elimina un valor por su clave pasada por parámetro

clear(): Elimina todo el storage

podemos recorrer el storage con un for normal

for(let i = 0; i< localStorage.length; i++){
  let clave = localStorage.key(i);
}

Para guardar objetos y arreglos necesitamos ingresarlos con un formato especial llamado JSON

let objeto = {usuario: "pepito", edad: 40};
localStorage.setItem("usuario", JSON.stringify(objeto));

Para recuperar objetos o arreglos necesitamos quitarle el formato JSON
let objetoRecuperado = JSON.parse(localStorage.getItem("objeto"));
*/

// let productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
//   { id: 3, nombre: "pantalon", precio: 1000 },
//   { id: 4, nombre: "gorra", precio: 1000 },
// ];

// localStorage.setItem("productos", JSON.stringify(productos));

// let boton = document.getElementById("crear");
let formulario = document.getElementById("formulario");
let agregados = document.getElementById("agregados");

const crear = (nombre, precio) => {
  let productosStorage = localStorage.getItem("productos");
  let productos = JSON.parse(productosStorage);

  let nuevoProducto = {
    id: productos.length + 1,
    nombre: nombre,
    precio: precio,
  };

  productos.push(nuevoProducto);
  localStorage.setItem("productos", JSON.stringify(productos));
};

// boton.addEventListener("click", () => {
//   let nombre = prompt("Ingrese el nombre del producto");
//   let precio = prompt("Ingrese el precio del producto");

//   crear(nombre, precio);
// });

formulario.addEventListener("submit", (e) => {
  e.preventDefault();

  let inputs = e.target.children;

  crear(inputs[0].value, inputs[1].value);
});

agregados.addEventListener("click", () => {
  let productosStorage = localStorage.getItem("productos");
  let productos = JSON.parse(productosStorage);

  productos.forEach((producto) => {
    let div = document.createElement("div");
    div.innerHTML = `
        <h2>Id: ${producto.id}</h2>
        <p>Nombre: ${producto.nombre}</p>
        <b>$${producto.precio}</b>
        <hr />
      `;

    document.body.append(div);
  });
});

// let saludo = document.getElementById("saludo");

// saludo.className = "color";
