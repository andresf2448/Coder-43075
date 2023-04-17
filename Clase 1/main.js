// comentario de linea

/* 
comentario
de
bloque
*/

// let edad = 45; //forma recomendada para declarar una variable
// var nombre = "andres";//forma no recomendada para declarar variables
// const NUMERO = 5;

// nombrePersonaBonita // Camel Case
// nombre_persona_bonito // Snake Case
// NombrePersonaBonita //Pascal Case

// let numeroUno = 5;
// let numeroDos = 6;
// let suma = numeroUno + numeroDos;
// let resta = numeroUno - numeroDos;
// let multiplicacion = numeroUno * numeroDos;
// let division = numeroUno / numeroDos;

// console.log("aca la suma", suma);
// console.log("aca la resta", resta);
// console.log("aca la multiplicacion", multiplicacion);
// console.log("aca la division", division);

// let saludo = "Hola";
// let nombre = "Camila";
// let mensaje = saludo + " " + nombre;
// console.log(mensaje);

// let nombre = prompt("ingrese su nombre");
// alert("Hola " + nombre);

// let numero = parseFloat(prompt("Ingrese un numero"));
// alert(numero + 5)

/* 
parseInt  pasa un string con un numero entero a un number
parseFloat  pasa un string con un decimal a un numero decimal de tipo number
Number  hace el papel tanto del parseFloat como el parseInt
*/

let numero = parseInt(prompt("¿en que año naciste?"));
let resta = 2023 - numero;
alert("ahora tienes" + resta + "años");