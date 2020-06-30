let addBtn = document.getElementById("btn-add");

addBtn.addEventListener("click", addProduct);

async function addProduct() {
  try {
    let product_name = document.getElementById("name_product").value;
    let price = document.getElementById("price").value;
    let type = document.getElementById("type").value;
    let imgUrl = document.getElementById("imgUrl").value;
    let descript = document.getElementById("description").value;

    let product = {
      product_name,
      price,
      type,
      imgUrl,
      descript,
    };

    // console.log(product);

    let url = `https://5ef168da1faf160016b4d5c4.mockapi.io/api/product`;
    let options = {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(product),
    };

    let response = await fetch(url, options);
    let results = await response.json();
    // console.log(results);
    swal("Add product success!", "", "success");
    setTimeout(function () {
      window.location.reload();
      document.querySelector("form").reset();
    }, 3000);
  } catch (error) {
    console.error(error);
  }
}

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
      // console.log(result);
      // alert(`todo dengan id ${result.id} sudah dihapus`))
    })
    .catch((error) => console.error(error));
}
