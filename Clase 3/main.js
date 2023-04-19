/* 
estructura del bucle for

for(desde; hasta; actualizacion){
  codigo a repetir
}
*/

// i++   i = i + 1

// for(let i = 0; i < 100; i++){
//   console.log("Hola");
// }

// let numero = parseInt(prompt("Ingrese un numero"))

// for(let i = 1; i <= 10; i++){
//   let resultado = numero * i;

//   alert(`${numero} * ${i} = ${resultado}`);
// }

// for(let turno = 1; turno <= 7; turno++){
//   let nombre = prompt("Ingrese su nombre");
//   alert(`Turno #${turno} Nombre: ${nombre}`);
// }

// alert("Se acabron los turnos");

/* for(let i = 0; i < 10; i++){
  if(i === 5){
    break;
  }

  console.log(i);
}

console.log("Proceso finalizado"); */

// for(let i = 1; i <= 10; i++){
//   if(i === 6){
//     continue;
//   }

//   console.log(i);
// }

// for(let i = 0; i < 20; i++){
//   if(i % 2 === 1){
//     continue;
//   }

//   console.log(i);
// }

/* 
estructura del bucle while

while(condicion){
  codigo a repetir siempre que la condicion sea verdadera
}
*/

// let repetir = true;

// while(repetir){
//   console.log("Hola");
// }

// let usuario = prompt("Ingrese el usuario");

// while(usuario != "camila"){
//   alert("Usuario incorrecto");
//   usuario = prompt("Ingrese el usuario");
// }

// alert("Bienvenida");

// let entrada = prompt("Ingrese un dato");

// while(entrada != "ESC"){
//   alert(`El usuario ingreso ${entrada}`);
//   entrada = prompt("Ingrese un dato");
// }

/* 
estructura del do while

do{
  codigo a ejecutar por primera vez y siempre que la condicion sea verdadera
}while(condicion);
*/

let repetir = false;

// while(repetir){
//   console.log("Entramos");
// }

/* do{
  console.log("entramos");
}while(repetir); */

// console.log("Entramos");

// while(repetir){
//   console.log("Entramos");
// }

/* 
estructura del switch

switch(valor){
  case valor1:
    codigo a ejecutar en caso de que el valor sea igual a valor1
    break;

  case valor2:
    codigo a ejecutar en casi de que el valor sea igual a valor2
    break;

  .
  .
  .

  default:
    codigo a ejeuctar en caso de que el valor no sea igual a ninguno de los valores anteriores
    break;
}
*/

// let moneda = "usd";

// switch (moneda) {
//   case "ars":
//     console.log("Moneda de argentina");
//     break;

//   case "cop":
//     console.log("Moneda de colombia");
//     break;

//   case "clp":
//     console.log("Moneda de chile");
//     break;

//   default:
//     console.log("Modenada desconocida");
//     break;
// }

let entrada = prompt("Ingrese un nombre");

while (entrada != "ESC") {
  switch (entrada) {
    case "ANA":
      alert("Hola ANA");
      break;

    case "JUAN":
      alert("Hola JUAN");
      break;

    default:
      alert("Quién eres?");
      break;
  }

  entrada = prompt("Ingrese un nombre");
}
