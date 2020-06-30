//Show All
let position = document.querySelector(".show");
let url1 = `https://5ef168da1faf160016b4d5c4.mockapi.io/api/product`;
let options1 = {
  method: "GET",
  headers: {
    "Content-type": "application/json",
  },
};

fetch(url1, options1)
  .then((response) => response.json())
  .then((results) => {
    for (let data in results) {
      //   console.log(results);

      let card = document.createElement("div");
      card.innerHTML = `
      <div class="card rounded" style="width: 18rem;">
      <img src="${results[data].imgUrl}" class="card-img-top" alt="...">
      <div class="card-body">
      <h5 class="card-title text-center">${results[data].product_name}</h5>
      </div>
      <ul class="list-group list-group-flush">
    <li class="list-group-item">Genre: ${results[data].type}</li>
    <li class="list-group-item">Release Year: ${results[data].price}</li>
    <li class="list-group-item">Synopsis: ${results[data].descript}</li>
    <li class="list-group-item">
    <button class="btn btn-primary" id="btn-edit">Edit</button>
    <button class="btn btn-danger" id="btn-del">Delete</button>
    </li>
      </ul>
    </div>
    `;
      position.appendChild(card);
    }
  });
