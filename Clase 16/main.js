// fetch(url, config);

// let lista = document.getElementById("listado");

// fetch("https://jsonplaceholder.typicode.com/posts")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((publicacion) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${publicacion.title}</h2>
//         <p>${publicacion.body}</p>
//         <hr />
//       `;

//       lista.append(li);
//     });
//   });

// fetch("https://jsonplaceholder.typicode.com/posts", {
//   method: "POST",
//   body: JSON.stringify({
//     title: "Publicacion Coder",
//     body: "Nuestra primera publicación",
//     userId: 1,
//   }),
//   headers: {
//     "Content-type": "application/json; charset=UTF-8",
//   },
// })
//   .then((response) => response.json())
//   .then((data) => console.log(data));

let lista = document.getElementById("listado");

// fetch("./data.json")
//   .then((response) => response.json())
//   .then((data) => {
//     data.forEach((producto) => {
//       const li = document.createElement("li");
//       li.innerHTML = `
//         <h2>${producto.id}</h2>
//         <p>${producto.nombre}</p>
//         <b>${producto.precio}</b>
//         <hr />
//       `;
//       lista.append(li);
//     });
//   });

const traerDatos = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");
    const data = await response.json();

    data.forEach((publicacion) => {
      const li = document.createElement("li");
      li.innerHTML = `
            <h2>${publicacion.title}</h2>
            <p>${publicacion.body}</p>
            <hr />
          `;

      lista.append(li);
    });
  } catch (error) {
    console.log(error);
  }
};

traerDatos();
