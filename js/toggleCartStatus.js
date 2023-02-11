function toggleCartStatus() {
  const cartWrapper = document.querySelector(".cart-wrapper");
  const cartEmptyPage = document.querySelector("[data-cart-empty]");

  const orderForm = document.querySelector("#order-form");

  if (cartWrapper.children.length > 0) {
    cartEmptyPage.style.display = "none";
    orderForm.style.display = "block";
  } else {
    cartEmptyPage.style.display = "block";
    orderForm.style.display = "none ";
  }
}
