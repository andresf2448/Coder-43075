// console.log(Math.round(Math.random() * 15 + 5));

// let array = [
//   { id: 1, nombre: "camisa" },
//   { id: 2, nombre: "zapato" },
// ];

// class Producto{
//   constructor(nombre, precio){
//     this.nombre = nombre;
//     this.precio = precio;
//     this.vendido = false;
//   }

//   vender(){
//     this.vendido = true;
//   }
// }

// const array = [];
// const producto1 = new Producto("camisa", 1100);
// // console.log(producto1);
// // producto1.vender();
// // console.log(producto1);
// array.push(producto1)
// console.log(array);

// const generarSaludo = (nombre, funcion) => {
//   if (funcion(nombre)) {
//     return () => `Hola soy ${nombre}`;
//   }
// };

// const validarEmpleado = (nombre) => {
//   if (nombre === "Marcos" || nombre === "Andres") {
//     return true;
//   } else {
//     return false;
//   }
// };

// let nombre = prompt("Ingrese el nombre");
// let saludo = generarSaludo(nombre, validarEmpleado);

// if (saludo) {
//   alert(saludo());
// } else {
//   alert("usuario no encontrado");
// }

// function sumar(x, y) {
//   return x + y;
// }

// const sumar = (x, y) => x + y;
// const saludar = (nombre) => `Hola ${nombre}`;

// console.log(sumar(4, 5));
// console.log(saludar("andres"));

// Array[(turno1, turno2, turno3)];
// class Turno {
//   constructor(nombre, direccion, pax, servicio) {
//     this.nombre = nombre;
//     this.direccion = direccion;
//     this.pax = pax;
//     this.servicio = servicio;
//   }
// }

// let eventosAgendados = [];
// const turno1 = new Turno("Ana", "1ro de mayo 1467", 36, "castillo");
// const turno2 = new Turno("Laura", "Juan b justo 255", 38, "Titeres");
// const turno3 = new Turno("Jesica", "Sarmiento 255", 45, "Animacion");

// eventosAgendados.push(turno1, turno2, turno3);
// console.log(eventosAgendados);

// for (let butaca = 1; butaca <= 5; butaca++) {
//   let edad = Number(prompt("Ingrese du edad"));
//   let nombre = prompt("Ingrese su nombre");
//   let mensaje = `Hola ${nombre}`;
//   alert(mensaje);

//   if (edad >= 18) {
//     let dni = Number(prompt("Ingrese su DNI"));
//     alert(`Butaca #${butaca} DNI ${dni}`);
//   } else {
//     alert("Debe ser mayor de edad");
//   }
// }
// alert("Entradas Agotadas");
