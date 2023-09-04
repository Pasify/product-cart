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
const storage = window.localStorage;
// clear all fields
function clearAllFields() {
  _productName.value = "";
  _productPrice.valueAsNumber = "";
  _productYear.value = "";
}

// getting items from the local storage
window.addEventListener("load", function () {
  console.log(`ready`);
  let savedItem = JSON.parse(storage.getItem("itemsArray"));
  itemsArray = savedItem;
  updateItemsArray();
});

// delete functionality
function deleteFunction(index) {
  // let savedItems = JSON.parse(storage.getItem("itemsArray"));
  itemsArray = itemsArray.filter((ele, ind) => ind != index);
  storage.setItem("itemsArray", JSON.stringify(itemsArray));
  updateItemsArray();
}

// update Items Array
function updateItemsArray() {
  itemsDisplay.innerHTML = "";
  itemsArray.forEach((item, ind) => {
    itemsDisplay.insertAdjacentHTML(
      "afterbegin",
      ` <div class="_item">
          <h3 class="product--title">${item.productNameValue}</h3>
          <div class="control">
            <p class="price p"><span class="sub">Price:
              </span>${item.productPriceValue} ₦
             </p>
            <p class="year p"><span class="sub">Year:
            </span> ${item.productYearValue}</p>
            <button class="delete-btn btn" data-delete-index="${ind}">Delete
            </button>
          </div>
        </div>
      `
    );
  });
}
itemsDisplay.addEventListener("click", function (e) {
  const clicked = e.target.closest(".delete-btn");
  if (!clicked) return;
  let DeleteBtnIndex = +clicked.dataset.deleteIndex;
  deleteFunction(DeleteBtnIndex);
});
// Event Listener For Save Button
_saveBtn.addEventListener("click", function () {
  let productNameValue = _productName.value;
  let productPriceValue = _productPrice.valueAsNumber;
  let productYearValue = _productYear.value;
  const item = { productNameValue, productPriceValue, productYearValue };
  if (!productNameValue || !productPriceValue || !productYearValue) {
    alert(
      `enter a  valid value for all fields and Year must be between 3 and 4`
    );
    return;
  }
  if (productYearValue.length < 3 || productYearValue.length > 4) {
    alert(`Year must be a between 3 and 4 characters.`);
    return;
  }
  itemsArray.push(item);
  storage.setItem("itemsArray", JSON.stringify(itemsArray));

  updateItemsArray();
  clearAllFields();
});
