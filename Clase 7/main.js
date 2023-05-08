// function mayorQue(n) {
//   return m => m > n;
// }

// let mayorQueCinco = mayorQue(5); // m => m > 5;
// console.log(mayorQueCinco(6));
// console.log(mayorQueCinco(3));

// let mayorQueDiez = mayorQue(10); // m => m > 10;
// console.log(mayorQueDiez(9));
// console.log(mayorQueDiez(11));

// const operaciones = (op) => {
//   if (op === "sumar") {
//     return (a, b) => a + b;
//   } else if (op === "restar") {
//     return (a, b) => a - b;
//   } else if (op === "multiplicar") {
//     return (a, b) => a * b;
//   } else if (op === "dividir") {
//     return (a, b) => a / b;
//   }
// };

// let operacion = prompt("Ingrese el nombre de la operacion deseada");
// const calcular = operaciones(operacion);
// let num1 = parseInt(prompt("Ingrese el numero"));
// let num2 = parseInt(prompt("Ingrese el numero"));
// let mensaje = `El resultado de laoperacion es: ${calcular(num1, num2)}`;

// alert(mensaje);

// const iterador = (arreglo, funcion) => {
//   for (const numero of arreglo) {
//     funcion(numero);
//   }
// };

// iterador([2, 3, 4, 5, 6], console.log);

// const duplicados = [];

// const iterador = (arreglo, funcion) => {
//   for (const numero of arreglo) {
//     funcion(numero);
//   }
// };

// iterador([3, 2, 1, 5], (numero) => {
//   duplicados.push(el * 2);
// });

// console.log(duplicados);

// class Producto{
//   constructor(nombre, edad){
//     this.nombre = nombre;
//     this.edad = edad
//   }
// }
// alert(Producto);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1350 },
//   { id: 3, nombre: "media", precio: 1100 },
//   { id: 4, nombre: "gorra", precio: 700 },
// ];

//forEach recorrer el arreglo
// productos.forEach((item) => {
//   console.log(item);
// });

//find encuentra el primer elemento que cumpla la condición
// const encontrado = productos.find(item => item.nombre === "camisa");
// console.log(encontrado);

// let nombre = prompt("ingrese el nombre del producto a buscar");
// const encontrado = productos.find((item) => item.nombre === nombre);

// if (encontrado) {
//   let mensaje = `
//     ID: ${encontrado.id}
//     Nombre: ${encontrado.nombre}
//     Precio: $${encontrado.precio}
//   `;

//   alert(mensaje);
// } else {
//   alert("Producto no encontrado");
// }

//filter encuentra los elementos que cumplan la condicion dada

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1350 },
//   { id: 3, nombre: "media", precio: 1100 },
//   { id: 4, nombre: "gorra", precio: 700 },
// ];

// const encontrados = productos.filter((item) => item.precio > 1000);
// console.log(encontrados);

// let precio = parseInt(prompt("Ingrese el precio minimo del producto"));
// const encontrados = productos.filter((item) => item.precio > precio && item.nombre.includes("o"));

// encontrados.forEach((item) => {
//   let mensaje = `
//     ID: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: $${item.precio}
//   `;

//     alert(mensaje);
// });

// let nombre = prompt("Ingrese el nombre del producto");
// const encontrados = productos.filter((item) => item.nombre.includes(nombre));

// encontrados.forEach((item) => {
//   let mensaje = `
//     ID: ${item.id}
//     Nombre: ${item.nombre}
//     Precio: $${item.precio}
//   `;

//     alert(mensaje);
// });

//some verificar si al menos un elemento del arreglo cumple la condicion dada
// console.log(productos.some(item => item.precio === 1000));
// console.log(productos.some(item => item.precio === 10));

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1350 },
//   { id: 3, nombre: "media", precio: 1100 },
//   { id: 4, nombre: "gorra", precio: 700 },
// ];

//map transformar los elementos de un arreglo
// const nombres = productos.map((item) => item.nombre);
// console.log(nombres);

// const precios = productos.map((item) => item.precio);
// console.log(precios);

// const info = productos.map((item) => {
//   return {
//     precio: item.precio,
//     nombre: item.nombre,
//   };
// });

// console.log(info);

// const preciosNavidad = productos.map((item) => {
//   if(item.nombre === "camisa"){
//     return {
//       id: item.id,
//       nombre: item.nombre,
//       precio: item.precio - item.precio * 0.21,
//     };
//   }

//   return item;
// });

// console.log(preciosNavidad);

//reduce reduce un arreglo a un valor
// const numeros = [2, 3, 4, 5, 6];
// let total = numeros.reduce((acum, item) => acum + item, 0);
// console.log(total);

// const productos = [
//   { id: 1, nombre: "camisa", precio: 1000 },
//   { id: 2, nombre: "zapato", precio: 1350 },
//   { id: 3, nombre: "media", precio: 1100 },
//   { id: 4, nombre: "gorra", precio: 700 },
// ];

// let total = productos.reduce((acum, item) => acum + item.precio, 0);
// console.log(total);

// let resultado = 0;

// for (let index = 0; index < productos.length; index++) {
//   const element = productos[index];
//   resultado += element.precio;
// }

// console.log(resultado);

//sort sirve para ordenar
// const numeros = [ 40, 1, 5, 200 ];
// console.log(numeros.sort((a, b) => a - b));  // [ 1, 5, 40, 200 ]
// console.log(numeros.sort((a, b) => b - a));  // [ 200, 40, 5, 1 ]

const items = [
  { name: "Pikachu", price: 21 },
  { name: "Charmander", price: 37 },
  { name: "Pidgey", price: 45 },
  { name: "Squirtle", price: 60 },
];

console.log(
  items.sort((a, b) => {
  if (a.name > b.name) {
    return 1;
  }
  if (a.name < b.name) {
    return -1;
  }
  // a es igual a b
  return 0;
}));
