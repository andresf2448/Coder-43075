/* 
estructura de una funcion

function nombreFuncion(){
  codigo a ejecutar por la funcion
}
*/

// function saludar() {
//   let nombre = prompt("ingrese su nombre");
//   let mensaje = `Bienvenido ${nombre}`;
//   alert(mensaje);
// }

// saludar();

// function saludar(){
//   console.log("Hola");
// }

// saludar();

/* 
estrcutura de las funcion con parametros

function nombreFuncion(parm1, parm2, ..., parmn){
  codigo a ejecutar por la funcion
}
*/

// function saludar(saludo, nombre) {
//   let mensaje = `${saludo} ${nombre}`;
//   alert(mensaje);
// }

// // saludar("Hola", "camila");
// // saludar("bienvenido", "pepito");

// let saludo = prompt("Ingrese el saludo");
// let nombre = prompt("Ingrese el nombre");

// saludar(saludo, nombre);

// function sumar(num1, num2) {
//   return num1 + num2;
// }

// let resultado = sumar(7, 2);
// console.log("resutltado", resultado);

// function saludar(){
//   console.log("Hola");
//   return
//   console.log("chao");
// }

// saludar()

// function calculadora(numero1, numero2, operacion) {
//   switch (operacion) {
//     case "+":
//       return numero1 + numero2;
//       break;

//     case "-":
//       return numero1 - numero2;
//       break;

//     case "*":
//       return numero1 * numero2;
//       break;

//     case "/":
//       return numero1 / numero2;
//       break;

//     default:
//       return "Operacion no encontrada";
//       break;
//   }
// }

// let numero1 = parseInt(prompt("Ingrese el numero uno"));
// let numero2 = parseInt(prompt("Ingrese el numero dos"));
// let operacion = prompt("Ingrese la operacion");

// let resultado = calculadora(numero1, numero2, operacion);
// alert(`El resultado de ${numero1} ${operacion} ${numero2} = ${resultado}`);

/* 
crear una funcion que reciba por parametro un numero y retorne true si es par y false si es impar

crear una fucnion que reciba un nombre y la edad y retone cualquier mensaje que involucre estos dos parametros
*/

// function sumar(num1, num2) {
//   return num1 + num2;
// }

// function par(numero){
//   if (numero % 2 === 0){
//     return true;
//   }else{
//     return false;
//   }
// }

// function email(nombre, edad){
//   //codigo para envío del correo
//   return `Hola Bienvenid@ ${nombre} a nuestra comunidad, tienes ${edad} años`;
// }

// let resultado = 0;

// function sumar(numero1, numero2){
//   let resultado = numero1 + numero2;
// }

// sumar(5, 2);
// console.log(resultado);

// let nombre = "juan";

// function saludar(){
//   let nombre = "camila";
//   console.log(nombre);
// }

// console.log(nombre);

// saludar();

// console.log(nombre);

// function sumar(numero1, numero2){
//   let resultado = numero1 + numero2;
//   return resultado;
// }

// function restar(numero1, numero2){
//   let resultado = numero1 - numero2;
//   return resultado;
// }

// const suma = function (a, b) {
//   return a + b;
// };

// console.log(suma(4, 5));

// const suma = (a, b) => {
//   return a + b;
// };

// x => x
// () => {return "hola"}

// console.log(suma(4, 5));

// const suma = (a, b) => a + b;

// console.log(suma(3, 4));

const suma = (a, b) => a + b;
const resta = (a, b) => a - b;
const iva = x => x * 0.21;

const precioProducto = 1000;
const descuento = 10;

let nuevoPrecio = resta(suma(precioProducto, iva(precioProducto)), descuento);
                = resta(suma(1000, iva(1000)), 10);
                = resta(suma(1000, 210), 10);
                = resta(1210, 10);
                = 1200;