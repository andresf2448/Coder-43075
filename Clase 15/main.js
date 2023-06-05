// setTimeout(funcion, timer);

// setTimeout(() => {
//   console.log("Hola");
// }, 3000);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 3000);

// console.log("Final");

// let saludo = document.getElementById("saludo");
// let boton = document.getElementById("boton");

// boton.addEventListener("click", () => {
//   saludo.classList.add("color");

//   setTimeout(() => {
//     saludo.classList.remove("color");
//   }, 3000);
// });

// for (let letra of "hola") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 1000);
// }

// for (let letra of "mundo") {
//   setTimeout(() => {
//     console.log(letra);
//   }, 3000);
// }

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

// function multiply (x, y) {
//   return x * y;
// }

// function printSquare (x) {
//   let s = multiply(x, x);
//   console.log(s);
// }

// printSquare(5);

// console.log("Inicio");

// setTimeout(() => {
//   console.log("Intermedio");
// }, 0);

// console.log("Final");

//setInterval
// setInterval(() => {
//   console.log("hola");
// }, 1000)

// let counter = 0;
// const interval = setInterval(() => {
//   counter++;
//   console.log("Counter: ", counter);

//   if (counter >= 5) {
//     clearInterval(interval);
//     console.log("Se removió el intervalo");
//   }
// }, 1000);

//PROMESAS

// new Promise((resolve, reject) => {
//   //cuerpo promesa
// })

// const futuro = (valor) => {
//   return new Promise((resolve, reject) => {
//     // if (valor) {
//     //   resolve("Promesa resuelta");
//     // } else {
//     //   reject("Promesa rechazada");
//     // }

//     setTimeout(() => {
//       valor ? resolve(["andres", "camila"]) : reject("Promesa rechazada");
//     }, 2000);
//   });
// };

// futuro(true)
//   .then((response) => console.log(response))
//   .catch((error) => console.log(error))
//   .finally(() => console.log("Proceso terminado"));

////////////////////////////////////////////////////////  SERVIDOR
const DB = [
  { id: 1, nombre: "camisa", precio: 1000 },
  { id: 2, nombre: "zapato", precio: 1000 },
  { id: 3, nombre: "media", precio: 1000 },
  { id: 4, nombre: "gorra", precio: 1000 },
];

const traerProductos = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(DB);
      // reject("error intente luego");
    }, 3000);
  });
};
////////////////////////////////////////////////////////

traerProductos()
  .then((response) => {
    response.forEach((producto) => {
      let div = document.createElement("div");
      div.innerHTML = `
        <h2>Id: ${producto.id}</h2>
        <p>Nombre: ${producto.nombre}</p>
        <b>precio: ${producto.precio}</b>
        <hr />
      `;

      document.body.append(div);
    });
  })
  .catch((error) => console.log(error));
