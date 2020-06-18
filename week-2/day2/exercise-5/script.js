let ulElement = document.createElement("ul");

const bahan = [
  " 4 paha ayam organik",
  "2 buah kentang potong-potong",
  "1 lembar daun kunyit iris",
  "4 lembar daun jeruk",
  "2 lembar daun salam",
  "1 bungkus kerisik (kelapa parut kering)",
  "200 ml santan + air",
  "Garam, perasan dan gula malaka",
];

bahan.forEach((data) => {
  let text = document.createTextNode(data);
  let liElement = document.createElement("li");
  liElement.appendChild(text);
  ulElement.appendChild(liElement);
});

const article = document.getElementById("article");
article.appendChild(ulElement);

let data = document.getElementById("image");
data.setAttribute(
  "src",
  "https://cdn-brilio-net.akamaized.net/news/2019/07/23/167723/1069955-1000xauto-resep-masakan-sederhana-menu-sehari-hari.jpg"
);
data.style.height = "300px";
data.style.width = "300px";
data.style.borderRadius = "4px";
data.style.margin = "10px";

const containerJs = document.querySelector("div");
containerJs.style.display = "flex";
containerJs.style.justifyContent = "center";
containerJs.style.flexWrap = "wrap";
