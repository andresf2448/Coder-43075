// fetch("./data.json")
//   .fetch((response) => response.json())
//   .then((data) => console.log(data));

const getCharacters = async () => {
  const response = await fetch("https://rickandmortyapi.com/api/character");
  const data = await response.json();
  const characters = data.results;

  characters.forEach((character) => {
    let div = document.createElement("div");
    div.innerHTML = `
      <h2>${character.name}</h2>
      <image src="${character.image}" />
      <p>${character.status}</p>
      <p>${character.gender}</p>
      <hr />
    `;
    document.body.append(div);
  });
};

getCharacters();
