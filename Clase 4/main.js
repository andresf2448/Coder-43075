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

function calculadora(numero1, numero2, operacion) {
  switch (operacion) {
    case "+":
      return numero1 + numero2;
      break;

    case "-":
      return numero1 - numero2;
      break;

    case "*":
      return numero1 * numero2;
      break;

    case "/":
      return numero1 / numero2;
      break;

    default:
      return "Operacion no encontrada";
      break;
  }
}

let numero1 = parseInt(prompt("Ingrese el numero uno"));
let numero2 = parseInt(prompt("Ingrese el numero dos"));
let operacion = prompt("Ingrese la operacion");

let resultado = calculadora(numero1, numero2, operacion);
alert(`El resultado de ${numero1} ${operacion} ${numero2} = ${resultado}`);
