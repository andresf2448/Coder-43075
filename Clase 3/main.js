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

for(let i = 0; i < 20; i++){
  if(i % 2 === 1){
    continue;
  }

  console.log(i);
}