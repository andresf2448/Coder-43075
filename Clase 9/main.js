// console.log(document.body);

//getElementById
// let div = document.getElementById("aplicacion");
// console.log(div.innerHTML);
// console.log(div.innerText);

// let parrafo = document.getElementById("parrafo");
// console.log(parrafo.innerHTML);
// console.log(parrafo.innerText);

//getElementsByClassName
// let perritos = document.getElementsByClassName("perritos");
// console.log(perritos[0].innerHTML);
// console.log(perritos[1].innerHTML);
// console.log(perritos[2].innerHTML);

// console.log(perritos);
// for(const perrito of perritos){
//   console.log(perrito.innerHTML);
// }

//getElementsByTagName
// let divs = document.getElementsByTagName("div");
// console.log(divs[0].innerHTML);
// console.log(divs[1].innerHTML);
// console.log(divs[2].innerHTML);

let saludo = document.getElementById("saludo");
let seccion = prompt("Ingrese la seccion");

if (seccion === "carrito") {
  saludo.innerHTML = "<h1>Bienvenidos al carrito</h1>";
  saludo.className = "rojo";
} else if (seccion === "favoritos") {
  saludo.innerHTML = "<h1>Bienvenidos a favoritos</h1>";
  saludo.className = "azul";
} else {
  saludo.innerHTML = "<h1>Bienvenidos a nuestra super página</h1>";
  saludo.className = "verde";
}
