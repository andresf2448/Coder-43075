// let usuario = prompt("ingrese el usuario");

// while(usuario != "pablo"){
//   alert("Usuario es incorrecto");
//   usuario = prompt("ingrese el usuario");
// }

let operacion = prompt("ingrese operacion");
let numero1 = parseInt(prompt("ingrese numero1"));
let numero2 = parseInt(prompt("ingrese numero2"));
let resultado;

while (operacion != "salir") {
  switch (operacion) {
    case "suma":
      resultado = numero1 + numero2;
      alert(resultado);
      break;
    case "resta":
      resultado = numero1 - numero2;
      alert(resultado);
      break;
    case "multiplicacion":
      resultado = numero1 * numero2;
      alert(resultado);
      break;
    default:
      alert("ingrese operacion valida");
  }

  operacion = prompt("ingrese operacion");
  numero1 = parseInt(prompt("ingrese numero1"));
  numero2 = parseInt(prompt("ingrese numero2"));
}

// for(let i = 0; i < 100; i = i + 3 ){
//   console.log(i);
// }
