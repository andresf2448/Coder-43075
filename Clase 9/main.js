// console.log(document.body);

//getElementById
// let div = document.getElementById("aplicacion");
// console.log(div.innerHTML);
// console.log(div.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName
// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// console.log(perritos);
// for(const perrito of perritos){
//   console.log(perrito.innerHTML);
// }

//getElementsByTagName
// let divs = document.getElementsByTagName("div");
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

// let saludo = document.getElementById("saludo");
// let seccion = prompt("Ingrese la seccion");

// if (seccion === "carrito") {
//   saludo.innerHTML = "<h1>Bienvenidos al carrito</h1>";
//   saludo.className = "rojo";
// } else if (seccion === "favoritos") {
//   saludo.innerHTML = "<h1>Bienvenidos a favoritos</h1>";
//   saludo.className = "azul";
// } else {
//   saludo.innerHTML = "<h1>Bienvenidos a nuestra super página</h1>";
//   saludo.className = "verde";
// }

//CREACIÓN DE NODOS
// let contenedor = document.getElementById("contenedor");
// let parrafo = document.createElement("p"); // Creación de la etiqueta
// parrafo.innerHTML = "<h1>Hola a todos</h1>"; //Asignación de contenido
// document.body.append(parrafo);
// contenedor.append(parrafo);

// let saludo = document.getElementById("saludo");
// saludo.remove();

// const personas = ["juan", "pepito", "mariana", "andres", "camila"];
// let contenedor = document.getElementById("contenedor");

// personas.forEach(item => {
//   let li = document.createElement("li");
//   li.innerHTML = item;
//   contenedor.append(li);
// });

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1000 },
//   { id: 3, nombre: "gorra", precio: 1000 },
//   { id: 4, nombre: "media", precio: 1000 },
//   { id: 4, nombre: "media", precio: 1000 },
// ];
// let contenedor = document.getElementById("contenedor");

// productos.forEach((item) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>Id: ${item.id}</h2>
//     <p>Nombre: ${item.nombre}</p>
//     <b>$${item.precio}</b>
//     <hr />
//   `;

//   contenedor.append(div);
// });

// let numero = 5;

// numero += 10; // numero = numero + 10;