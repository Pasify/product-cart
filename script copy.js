// Getting Elements
// Product-Section
const _productName = document.getElementById("product--name");
const _productPrice = document.getElementById("product--price");
const _productYear = document.getElementById("product--year");
const _saveBtn = document.querySelector(".save-btn");

// Item Section
const _productTitle = document.querySelector(".product-title");
const _price = document.querySelector(".price");
const _year = document.querySelector(".year");
const _deleteBtn = document.querySelector(".delete-btn");
const itemsDisplay = document.querySelector(".item-display");

let itemsArray = [];
// clear all fields
function clearAllFields() {
  _productName.value = "";
  _productPrice.valueAsNumber = "";
  _productYear.value = "";
}

// update Items Array
function updateItemsArray() {
  itemsDisplay.innerHTML = "";
  itemsArray.forEach((item, ind) => {
    itemsDisplay.insertAdjacentHTML(
      "beforeend",
      ` <div class="_item">
          <h3 class="product--title">${item.productNameValue}</h3>
          <div class="control">
            <p class="price p"><span class="sub">Price: </span>${item.productPriceValue}€</p>
            <p class="year p"><span class="sub">Year: </span> ${item.productYearValue}</p>
            <button class="delete-btn btn" data-delete-index="${ind}>Delete</button>
          </div>
        </div>
      `
    );
  });

  // // delete functionality
  // const deleteButton = document.querySelectorAll(".delete-btn");
  // console.log(deleteButton);
  // deleteButton.forEach((btn, id) => {
  //   btn.addEventListener("click", function () {
  //     itemsArray.filter((ele, ind) => ind != id);
  //   });

  //   updateItemsArray();
  // });
}

// Event Listener For Save Button
_saveBtn.addEventListener("click", function () {
  let productNameValue = _productName.value;
  let productPriceValue = _productPrice.valueAsNumber;
  let productYearValue = _productYear.value;
  const item = { productNameValue, productPriceValue, productYearValue };
  itemsArray.push(item);

  updateItemsArray();
  clearAllFields();

  const deleteButton = document.querySelectorAll(".delete-btn");

  deleteButton.forEach((btn, id) => {
    btn.addEventListener("click", function () {
      let rem = itemsArray.filter((ele, ind) => ind != id);
      // itemsArray = rem;
      // console.log(itemsArray);
    });
  });
});
