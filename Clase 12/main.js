//OPERADOR ++

// let numero = 20;

// numero = numero + 1;
// numero += 1;
// numero++;

//OPERADOR TERNARIO
/* 
condicion ? codigo cuando condicion es verdadera : codigo cuando condicion falsa
*/

// let edad = 10;

// if(edad >= 18){
//   console.log("Eres mayor de edad");
// }else{
//   console.log("No eres mayor de edad");
// }

// edad >= 18 ? console.log("Eres mayor de edad") : console.log("No eres mayor de edad");

// const usuario = {
//   nombre: "juan",
//   edad: 20,
// };
// let permiso;

// if (usuario.edad >= 18) {
//   permiso = true;
// } else {
//   permiso = false;
// }

// if (permiso) {
//   console.log("puedes entrar a la fiesta");
// } else {
//   console.log("no puedes entrar a la fiesta");
// }

// const usuario = {
//   nombre: "juan",
//   edad: 20,
// };

// const permiso = usuario.edad >= 18 ? true : false;
// permiso ? console.log("puedes entrar a la fiesta") : console.log("no puedes entrar a la fiesta");

// INTERPRETACION DE LOS OPERADORES LOGICOS
/* 
operador1 && operador2 retorna operador2 si operador1 representa true, en caso contrario retorna operador1

operador1 || operador2 retorna operador1 si este representa true en caso contrario retorna operador2
*/

// const carrito = [];

// if(carrito.length === 0){
//   console.log("El carrito está vacío");
// }

// carrito.length === 0 && console.log("El carrito está vacío");

// const usuario = {
//   nombre: "juan",
//   edad: 20,
// };

// const registro = usuario.edad >= 18 && new Date();

// console.log(registro);

// console.log(0 || "Falsy"); //falsy
// console.log(40 || "Falsy"); //40
// console.log(null || "Falsy"); //falsy
// console.log(undefined || "Falsy"); //falsy
// console.log("Hola Mundo" || "Falsy"); //hola mundo
// console.log("" || "Falsy"); //falsy
// console.log(NaN || "Falsy"); // falsy
// console.log(true || "Falsy"); //true
// console.log(false || "Falsy"); //falsy

// const usuario1 = {
//   nombre: "juan",
//   edad: 20,
// };

// const usuario2 = null;

// console.log(usuario1 || "El usuario no existe");
// console.log(usuario2 || "El usuario no existe");

// let carrito;
// let carritoStorage = JSON.parse(localStorage.getItem("carrito"));

// if (carritoStorage) {
//   carrito = carritoStorage;
// } else {
//   carrito = [];
// }

// let carrito = JSON.parse(localStorage.getItem("carrito")) || [];

// const usuario = null;

// console.log(usuario?.nombre || "El usuario no existe");

// const usuario = {
//   nombre: "juan",
//   cursos: {
//     javascript: "aprobado",
//   },
// };

// console.log(usuario?.cursos?.javascript || "La propiedad no existe");
// console.log(usuario?.cursos?.react || "La propiedad no existe");

// const usuario1 = {
//   nombre: "juan",
//   edad: 20,
//   direccion: "AV",
// };

// let nombre = usuario1.nombre;
// let edad = usuario1.edad;
// let direccion = usuario1.direccion;

// let { nombre, edad, direccion } = usuario1;
// console.log(nombre, edad, direccion);

// const usuario = {
//   nombre: "John Doe",
//   edad: 32,
//   telefono: {
//     cel: 113334444,
//     casa: null,
//     trabajo: 113325555,
//   },
// };

// const {
//   nombre,
//   telefono: { trabajo },
// } = usuario;

// console.log(nombre, trabajo);

// const usuario1 = {
//   nombre: "juan",
//   edad: 20,
//   direccion: "AV",
// };

// const { nombre: namePerson, edad } = usuario1;

// console.log(namePerson, edad);

// const destructuracion = ({ id, nombre }) => {
//   console.log(id, nombre);
// };

// let objeto = { id: 1, nombre: "camisa", precio: 100 };
// destructuracion(objeto);

const nombres = ["juan", "melina", "pedro", "pablo"];

const [ , a, , b] = nombres;
console.log(a, b);