// let nombre1 = "andres";
// let nombre2 = nombre1;

// nombre2 = "camila";

// console.log(nombre1);

// let persona1 = { nombre: "andres", edad: 26 };
// let persona2 = {...persona1};

// persona2.nombre = "camila";

// console.log(persona1);

// const nombres = ["Juan", "Julieta", "Carlos", "Mariela"];

// console.log(...nombres);
// console.log(nombres.join(" "));

// let numeros = [43, 5, 7, 8, 9];

// console.log(Math.min(...numeros));
// console.log(Math.max(...numeros));

// const nombres1 = ["Juan", "Julieta"];
// const nombres2 = ["Carlos", "Mariela"];

// const nombres = [...nombres1, ...nombres2];
// console.log(nombres);

// const usuario1 = {
//   nombre: "andres",
//   edad: 23,
// };

// const usuario2 = {
//   ...usuario1,
//   edad: 26,
//   curso: "javascript",
// };

// console.log(usuario1);

// function sumar(...numeros) {
//   return numeros.reduce((acum, item) => acum + item, 0);
// }

// console.log(sumar(2, 3, 4, 56, 7));
// console.log(sumar(2));

/* 
if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar cuando ninguna de las condiciones es verdadera
}
*/

// let usuario = prompt("Ingrese el usuario");

// while (usuario != "pepito") {
//   alert("usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenido");

// function sumar(a, b) {
//   return a + b;
// }

// const sumar = (a, b) => {
//   return a + b;
// };
//x => {return x};
//x => x;
//() => "hola";

// function Persona(nombre, edad) {
//   this.nombre = nombre;
//   this.edad = edad;
//   this.hablar = function () {
//     console.log(`Hola soy ${this.nombre}`);
//   };
// }

// class Persona {
//   constructor(nombre, edad) {
//     this.nombre = nombre;
//     this.edad = edad;
//   }

//   hablar() {
//     console.log(`Hola soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("andres", 26);
// const persona2 = new Persona("mariana", 26);
// console.log(persona1.nombre);
// console.log(persona2.nombre);

// forEach
// filter
// map
// find

const personas = [
  { id: 1, nombre: "mariana", edad: 20 },
  { id: 1, nombre: "sofia", edad: 20 },
  { id: 1, nombre: "melani", edad: 20 },
  { id: 1, nombre: "camila", edad: 20 },
];

// personas.forEach((persona) => {
//   let div = document.createElement("div");
//   div.innerHTML = `
//     <h2>Id: ${persona.id}</h2>
//     <p>Nombre: ${persona.nombre}</p>
//     <b>Edad: ${persona.edad}</b>
//   `;

//   document.body.append(div);
// });

// let nombres = personas.map(item => item.nombre);
console.log(nombres);