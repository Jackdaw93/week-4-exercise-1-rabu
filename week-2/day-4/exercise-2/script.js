let buttonValue = document.getElementById("btn-input");

buttonValue.addEventListener("click", function () {
  let regexName = /^\d{10,12}$/;
  let inputValue = document.getElementById("input").value;

  if (inputValue.match(regexName)) {
    document.querySelector(
      ".container .row .col-12 #result"
    ).innerHTML = `Phone Number is <span style="background-color: yellow;color:blue">${inputValue}</span>`;
  } else {
    document.querySelector(
      ".container .row .col-12 #result"
    ).innerHTML = `Total digits is <span style="background-color: red;color:white">${inputValue.length}</span> need min 10 and max 12 number`;
  }
});
