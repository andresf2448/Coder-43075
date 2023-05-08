/* 
estructura de un arreglo

[elem1, elem2, ..., elemn];
*/

// const vacio = [];
// const numeros = [1, 4, 3, 5, 6, 7];
// const nombres = ["camila", "andres", "pepito"];
// const valores = [true, false, false, true];
// const variados = [1, true, "camila"];

// console.log(nombres[2]);
// console.log(nombres[0]);
// console.log(numeros[0] + numeros[5]);

// const nombres = ["camila", "andres", "pepito", "mariana", "sofia"];

// for(let index = 0; index < nombres.length; index++){
//   console.log(nombres[index]);
// }

// const nombres = ["camila", "andres"];
// nombres.push("pepito"); //agrega un elemento al final del arreglo
// nombres.unshift("fabian"); // agrega un elemento al inicio del arreglo
// console.log(nombres);

// nombres.pop();//sacar el ultimo elemento del arreglo
// console.log(nombres);

// nombres.shift();// sacar el primer elemento de un arreglo
// console.log(nombres);

// const nombres = ["camila", "andres", "fabian", "mariela"];
// nombres.splice(1, 2); //elimina un fragmento del arreglo
// nombres.splice(1, 0, "gabriel"); //agrega un elemento al arreglo
// console.log(nombres);

// let resultado = nombres.join(" ");
// console.log(resultado);//une en un string todos los elemento separados por el parametro

// const mascotas = ["zeus", "max"];

// const varios = nombres.concat(mascotas); //combina dos arreglo en uno solo
// console.log(varios);

// const nombres = ["camila", "andres", "fabian", "mariela"];
// const copia = nombres.slice(1, 3); //hace una copia de un fragmento del arreglo
// console.log(copia);
// console.log(nombres);

// const nombres = ["camila", "andres", "fabian", "mariela"];
//console.log(nombres.indexOf("andres"));
//console.log(nombres.indexOf("andres1"));

// let nombre = prompt("Ingrese el nombre a buscar");

// if(nombres.indexOf(nombre) != -1){ //encuentra la posicion de un elemento
//   alert("elemento encontrado");
// }else{
//   alert("elemento no encontrado");
// }

// const nombres = ["camila", "andres", "fabian", "mariela"];

// let nombre = prompt("Ingrese el nombre");

// if (nombres.includes(nombre)) { // verifica la existencia  de un elemento
//   alert(`${nombre} encontrado`);
// } else {
//   alert(`${nombre} no encontrado`);
// }

// const nombres = ["camila", "andres", "fabian", "mariela"];
// nombres.reverse(); //invierte el orden del arreglo
// console.log(nombres);

// const nombres = ["camila", "andres", "fabian", "mariela"];

// const eliminar = (nombre) => {
//   let index = nombres.indexOf(nombre);

//   if(index != -1){
//     nombres.splice(index, 1);
//     console.log(nombres);
//   }
// };

// eliminar("andres");

//ARREGLOS Y OBJETOS
// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 578 },
//   { id: 3, nombre: "gorra", precio: 370 },
//   { id: 4, nombre: "media", precio: 400 },
// ];

// for(const item of productos){
//   console.log(item.precio);
//   console.log(item.nombre);
// }

// class Producto {
//   constructor(nombre, precio) {
//     this.nombre = nombre;
//     this.precio = precio;
//   }

//   ingreso(){

//   }
// }

// const productos = [];

// const producto1 = new Producto("camisa", 1000);
// const producto2 = new Producto("pantalon", 1100);
// console.log(producto1.nombre);
// console.log(producto2.nombre);
// productos.push(producto1);
// productos.push(producto2);

// console.log(productos);

// const libros = [
//   { nombre: "asdfasdf", precio: 1230, id: 1 },
//   { nombre: "asdfasdf", precio: 1230, id: 2 },
//   { nombre: "asdfasdf", precio: 1230, id: 3 },
// ];

const libros1 = ["libro1", "libro2", "libro3"];


