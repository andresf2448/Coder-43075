//MATH
// console.log(Math.E);
// console.log(Math.PI);

// console.log(Math.max(55, 4, 5, 6, 2, 99));
// console.log(Math.min(55, 4, 5, 6, 2, 99));
// console.log(Math.min(55, 4, 5, 6, -Infinity, 2, 99));
// console.log(Math.max(55, 4, 5, 6, Infinity, 2, 99));
// console.log(Math.ceil(3.1)); //aproxima hacia arriba al entero más cercano
// console.log(Math.floor(3.8)); //aproxima hacia abajo al entero más cercano
// console.log(Math.round(3.1)); // aproxima al más cercano
// console.log(Math.round(3.8));
// console.log(Math.round(3.5));

// console.log(Math.sqrt(9));
// console.log(Math.sqrt(-1));

// console.log(Math.random());
// console.log(Math.random() * 10);
// console.log(Math.round(Math.random() * 10) + 10);
// console.log(Math.round(Math.random() * 5) + 7);

// const generadora = (desde, rango) => {
//   return Math.round(Math.random() * rango + desde);
// }

// console.log(generadora(13, 7));
// const nombres = ["juan", "camila", "andres", "pepito"];

// const nombreAleatorio = () => {
//   let indice = Math.round(Math.random() * (nombres.length - 1));

//   return nombres[indice];
// };

// console.log(nombreAleatorio());
// console.log(nombreAleatorio());
// console.log(nombreAleatorio());

//DATE
// console.log(Date());
// console.log(new Date(2023, 4, 10));
// const navidad = new Date(2023, 11, 24, 23, 59, 59);
// console.log(navidad);

// const navidad = new Date("December 24, 2023 23:59:59");
// console.log(navidad.toDateString());
// console.log(navidad.toLocaleString());
// console.log(navidad.toLocaleDateString());
// console.log(navidad.toTimeString());
// console.log(navidad.getFullYear());
// console.log(navidad.getMonth());
// console.log(navidad.getDay());

// const navidad = new Date("December 24, 2023");
// const hoy = new Date("May 10, 2023");

// console.log(navidad - hoy);

// const milisegundosPorDia = 86400000;

// console.log((navidad - hoy) / milisegundosPorDia);
