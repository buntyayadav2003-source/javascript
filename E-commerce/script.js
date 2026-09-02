const NameInputElmt = document.querySelector("#NameInput");
const descriptionElmt = document.querySelector("#DescriptionInput");
const priceElmt = document.querySelector("#priceInput");
const imagePathElmt = document.querySelector("#imagePathInput");
const addNewBtnElmt = document.querySelector("#addNewBtnInput");
const renderProductsElmt = document.querySelector("#renderProducts");
const renderCartElmt = document.querySelector("#renderCart");
const amtDetailsElmt = document.querySelector("#amtDetails");
const priceDisInputElmt = document.querySelector("#priceDiInput");
const products = [];
const cart = [];

function getProductsFromLocal() {
  return JSON.parse(localStorage.getItem("products")) || [];
}

function getCartFromLocal() {
  return JSON.parse(localStorage.getItem("cart")) || [];
}

function saveToLocalProducts(p = products) {
  localStorage.setItem("products", JSON.stringify(p));
}

function saveToLocalCart(c = cart) {
  localStorage.setItem("cart", JSON.stringify(c));
}

function addNewProducts() {
  const newProduct = {
    id: Date.now(),
    name: NameInputElmt ? NameInputElmt.value : "",
    description: descriptionElmt ? descriptionElmt.value : "",
    price: priceElmt ? Number(priceElmt.value) : 0,
    imgPath: imagePathElmt ? imagePathElmt.value : "",
    discount: priceDisInputElmt ? Number(priceDisInputElmt.value) : 0,
  };

  const prodFromLocal = getProductsFromLocal();
  prodFromLocal.push(newProduct);
  saveToLocalProducts(prodFromLocal);

  if (NameInputElmt) NameInputElmt.value = "";
  if (descriptionElmt) descriptionElmt.value = "";
  if (priceElmt) priceElmt.value = "";
  if (imagePathElmt) imagePathElmt.value = "";
  if (priceDisInputElmt) priceDisInputElmt.value = "";

  renderProducts();
}

if (addNewBtnElmt) {
  addNewBtnElmt.addEventListener("click", addNewProducts);
}

function renderProducts() {
  if (!renderProductsElmt) return;
  const prodFromLocal = getProductsFromLocal();

  renderProductsElmt.innerHTML = prodFromLocal
    .map(
      (prod) => `
        <div class="col-12 col-md-6 col-lg-3 mb-3">
            <div class="card" style="width: 16rem;">
                <img src="${prod.imgPath || 'https://via.placeholder.com/150'}" class="card-img-top customImgCard" alt="${prod.name}">
                <div class="card-body">
                    <h5 class="card-title">${prod.name}</h5>
                    <p class="card-text">${prod.description}</p>
                    <button class="btn btn-primary" onclick="addTocart(${prod.id})">Add To Cart</button>
                </div>
            </div>
        </div>
    `
    )
    .join("");
}


function updateCartBadge() {
  const cartFromLocal = getCartFromLocal();
  const badge1 = document.querySelector("#cartLength");
  const badge2 = document.querySelector("#cartFromLocal");

  if (badge1) badge1.textContent = cartFromLocal.length;
  if (badge2) badge2.textContent = cartFromLocal.length;
}

function addTocart(ID) {
  const prodFromLocal = getProductsFromLocal();
  const cartFromLocal = getCartFromLocal();

  const prodForcart = prodFromLocal.find((p) => p.id == ID);
  if (!prodForcart) {
    alert("Product not available");
    return;
  }

  const existingProdInCartIndex = cartFromLocal.findIndex((p) => p.prodID == ID);

  if (existingProdInCartIndex != -1) {
    cartFromLocal[existingProdInCartIndex].quantity += 1;
  } else {
    const prod = {
      id: Date.now(),
      prodID: prodForcart.id,
      name: prodForcart.name,
      price: prodForcart.price,
      discount: prodForcart.discount || 0,
      quantity: 1,
    };
    cartFromLocal.push(prod);
  }

  saveToLocalCart(cartFromLocal);
  updateCartBadge();
  renderCart();
}

function incrementProdQuantity(id) {
  const cartFromLocal = getCartFromLocal();
  const item = cartFromLocal.find((p) => p.id == id);
  if (item) {
    item.quantity += 1;
    saveToLocalCart(cartFromLocal);
    updateCartBadge();
    renderCart();
  }
}

function decreamentProdQuantity(id) {
  let cartFromLocal = getCartFromLocal();
  const itemIndex = cartFromLocal.findIndex((p) => p.id == id);

  if (itemIndex !== -1) {
    cartFromLocal[itemIndex].quantity -= 1;
    if (cartFromLocal[itemIndex].quantity <= 0) {
      cartFromLocal.splice(itemIndex, 1);
    }
    saveToLocalCart(cartFromLocal);
    updateCartBadge();
    renderCart();
  }
}

function renderCart() {
  if (!renderCartElmt) return;

  let cartFromLocal = getCartFromLocal();
  cartFromLocal = cartFromLocal.filter((p) => p.quantity > 0);

  if (cartFromLocal.length > 0) {
    renderCartElmt.innerHTML = cartFromLocal
      .map((p, i) => {
        const discount = p.discount || 0;
        const finalPrice = (p.price - (p.price * discount) / 100).toFixed(2);

        return `
          <tr>
            <th scope="row">${i + 1}</th>
            <td>${p.name}</td>
            <td>
              Original Price: <del>₹${p.price}</del><br>
              <span>₹${finalPrice}</span>
            </td>
            <td>
              <button class="btn btn-secondary" onclick="decreamentProdQuantity(${p.id})">-</button>
              <span class="mx-2">${p.quantity}</span>
              <button class="btn btn-secondary" onclick="incrementProdQuantity(${p.id})">+</button>
            </td>
          </tr>
        `;
      })
      .join("");

    const TotalAmount = cartFromLocal.reduce((tAmt, p) => {
      const discount = p.discount || 0;
      const itemPrice = p.price - (p.price * discount) / 100;
      return tAmt + itemPrice * p.quantity;
    }, 0);

    let deliveryCharges = 30;
    let handlingCharges = 50;
    let cartAMT = TotalAmount + deliveryCharges + handlingCharges;

    if (amtDetailsElmt) {
      amtDetailsElmt.innerHTML = `
        <p>Total Amount: &#8377 <i>${TotalAmount.toFixed(2)}</i></p>
        <p>Delivery Charges: &#8377 <i>${deliveryCharges}</i></p>
        <p>Handling Charges: &#8377 <i>${handlingCharges}</i></p>
        <hr>
        <p><strong>Grand Total: &#8377 <i>${cartAMT.toFixed(2)}</i></strong></p>
      `;
    }
  } else {
    renderCartElmt.innerHTML = `<tr><td colspan="4" class="text-center">Your cart is empty.</td></tr>`;
    if (amtDetailsElmt) {
      amtDetailsElmt.innerHTML = `<h1>Your cart is EMPTY</h1>`;
    }
  }
}

// Window Load Event
window.addEventListener("load", () => {
  const prodFromLocal = getProductsFromLocal();
  const cartFromLocal = getCartFromLocal();

  if (prodFromLocal.length === 0) {
    saveToLocalProducts();
  }
  if (cartFromLocal.length === 0) {
    saveToLocalCart();
  }

  
  updateCartBadge();

  if (renderProductsElmt) {
    renderProducts();
  }
  if (renderCartElmt) {
    renderCart();
  }
});