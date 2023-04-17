/* 
estructura del condicional if

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}
*/

// if(true){
//   console.log("Entramos");
// }

// console.log("Finalizamos");

// if("adf"){
//   console.log("Entramos");
// }

// console.log("Finalizamos");

// let nombre = "andres";

// if(nombre === "pepito"){
//   console.log("Hola pepito");
// }

/* 
estructura del condicional if else

if(condicion){
  codigo a ejecutar en caso de que la condicion sea verdadera
}else{
  codigo a ejecutar cuando la condicion sea falsa
}
*/

// let edad = 12;

// if(edad >= 18){
//   console.log("eres mayor de edad");
// }else{
//   console.log("Eres menor de edad");
// }

// let nombre = prompt("Ingrese su nombre");

// if(nombre === ""){
//   alert("Nombre incorrecto");
// }else{
//   let mensaje = "Hola " + nombre;
//   alert(mensaje);
// }

// let respuesta = prompt("Terminaste la tarea???");

// if(respuesta.toLowerCase() === "si"){
//   alert("Puedes salir a jugar");
// }else{
//   alert("No puedes salir a jugar");
// }

/* 
estructura el condicional if else if

if(condicion1){
  codigo a ejecutar cuando la condicion1 es verdadera
}else if(condicion2){
  codigo a ejecutar cuando la condicion2 es verdadera
}else{
  codigo a ejecutar en caso de que ninguna de las condiciones anteriores sea verdadera
}
*/

// let edad = Number(prompt("Ingrese su edad"));

// if(edad <= 14){
//   alert("No puedes entrar a la fiesta");
// }else if(edad < 18){
//   alert("Puedes entrar con un adulto");
// }else{
//   alert("Puedes ingresar a la fiesta");
// }

/* 
= asignacion
== comparacion solo de valor
=== comparacion tanto de tipo de dato como de valor
*/

/* 
condicion1 && condicion2 es verdadero cuando ambas condiciones sean verdaderas
condicion1 || condicion2 es verdadera cuando al menos una de las condiciones es verdadera
*/

// let nombre = prompt("Ingrese el nombre");
// let apellido = prompt("Ingrese el apellido");

// if(nombre != "" && apellido != ""){
//   // let mensaje = "Hola " + nombre + " " + apellido;
//   let mensaje = `Hola ${nombre} ${apellido} asdfasdfasdfasdfasdasdf`;
//   alert(mensaje);
// }else{
//   alert("Ingrese el nombre y el apellido");
// }

// let nombre = prompt("Ingrese su nombre");

// if(nombre != "" && (nombre === "andres" || nombre === "ANDRES")){
//   alert("Hola Andrés");
// }else{
//   alert("error");
// }

let nombre = prompt("Ingrese su nombre");

if(nombre.toLowerCase() === "andres"){
  alert("Hola Andrés");
}else{
  alert("error");
}