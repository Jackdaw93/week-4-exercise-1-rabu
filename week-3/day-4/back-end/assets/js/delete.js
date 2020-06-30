let delBtn = document.getElementById("btn-del");
delBtn.addEventListener("click", deleteProduct);

function deleteProduct(id) {
  let url = `https://5ef168da1faf160016b4d5c4.mockapi.io/api/product/${id}`;

  let options = {
    method: "DELETE",
    headers: {
      "Content-type": "application/json",
    },
  };

  fetch(url, options)
    .then((response) => {
      console.log(response);
      response.json();
    })
    .then((result) => {
      swal({
        title: "Are you sure?",
        text:
          "Once deleted, you will not be able to recover this imaginary file!",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      }).then((willDelete) => {
        if (willDelete) {
          swal("Poof! Your imaginary file has been deleted!", {
            icon: "success",
          });
        } else {
          swal("Your imaginary file is safe!");
        }
      });
    })
    .catch((error) => console.error(error));
}
