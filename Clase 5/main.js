/* let nombre = "pepito";
let edad = 45;
let direccion = "AV"; */

/* 
estructura de un objeto

{calve1: valor1, clave2: valor2, ..., claven: valorn}
*/

// const persona1 = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// console.log(persona1.nombre);
// console.log(persona1.edad);
// console.log(persona1.direccion);

// console.log(persona1["nombre"]);
// console.log(persona1["edad"]);
// console.log(persona1["direccion"]);

// const persona1 = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV",
// };

// let clave = prompt("ingrese la clave");

// console.log(persona1[clave]);

// function Persona(nombrePersona, edadPersona, direccionPersona){
//   this.nombre = nombrePersona;
//   this.edad = edadPersona;
//   this.direccion = direccionPersona;
// }

// const persona1 = new Persona("pepito", 45, "AV");
// const persona2 = new Persona("pepita", 46, "AV1");
// console.log(persona1);
// console.log(persona2);

// function Persona(info){
//   this.nombre = info.nombre;
//   this.edad = info.edad;
//   this.direccion = info.direccion;
// }

// let info = {
//   nombre: "pepito",
//   edad: 45,
//   direccion: "AV"
// }

// const persona1 = new Persona(info);
// const persona2 = new Persona(info);

// function Persona(nombrePersona, edadPersona, direccionPersona){
//   this.nombre = nombrePersona;
//   this.edad = edadPersona;
//   this.direccion = direccionPersona;
// }

// const persona1 = new Persona("pepito", 45, "AV");
// const persona2 = new Persona("pepita", 46, "AV1");
// console.log(persona1);
// console.log(persona2.nombre);

// function Producto(nombre, precio, imagen){
//   this.nombre = nombre;
//   this.precio = precio;
//   this.imagen = imagen;
// }

// const producto1 = new Producto("Monitor gamer BenQ ...", 295319, "htppp.asdflkjhasdlfjh");
// const producto2 = new Producto("Monitor gamer Sams ...", 714695, "htppp.asdflkh");

// function Producto(nombre, precio, imagen){
//   this.nombre = nombre;
//   this.precio = precio;
//   this.imagen = imagen;
// }

// const producto1 = new Producto("Monitor gamer BenQ ...", 295319, "htppp.asdflkjhasdlfjh");

// for(const item in producto1){
//   console.log("clave", item);
//   console.log("valor", producto1[item]);
// }

// function Persona(nombrePersona, edadPersona, direccionPersona){
//   this.nombre = nombrePersona;
//   this.edad = edadPersona;
//   this.direccion = direccionPersona;
//   this.hablar = function(){console.log(`Hola Soy ${this.nombre}`);}
// }

// class Persona{
//   constructor(nombre, edad, direccion){
//     this.nombre = nombre;
//     this.edad = edad;
//     this.direccion = direccion;
//   }

//   hablar(saludo){
//     console.log(`${saludo} Soy ${this.nombre}`);
//   }
// }

// const persona1 = new Persona("pepito", 45, "AV");
// persona1.hablar("Bienvenido");

class Producto{
  constructor(nombre, precio){
    this.nombre = nombre;
    this.precio = precio;
    this.vendido = false;
  }

  vender(){
    this.vendido = true;
  }
}

const producto1 = new Producto("camisa", 1000);
const producto2 = new Producto("zapato", 1001);
console.log(producto1);

producto1.vender();
console.log(producto1);
console.log(producto2);
