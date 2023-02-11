function calcCartPrice() {
  const cartItems = document.querySelectorAll(".cart-item");
  let totalPriceEl = document.querySelector(".total-price");
  let deliveryCost = document.querySelector(".delivery-cost");
  let cartDeliveryEl = document.querySelector("[data-cart-delivery]");
  let cartFreeDelivary = document.querySelector("[data-cart-freedelivery]");

  let totalPrice = 0;
  cartItems.forEach((item) => {
    const amountEl = item.querySelector("[data-counter]").innerText;
    const priceEl = item.querySelector(".price__currency").innerText;
    console.log(parseInt(priceEl));
    const currentPrice = parseInt(amountEl) * parseInt(priceEl);
    totalPrice += currentPrice;
  });

  totalPriceEl.innerText = totalPrice;
  if (totalPrice > 0) {
    cartDeliveryEl.style.display = "block";
  } else {
    cartDeliveryEl.style.display = "none";
  }

  if (totalPrice >= 800) {
    deliveryCost.classList.add("free");
    deliveryCost.innerText = "беплатно";
    cartFreeDelivary.style.display = "none";
  } else {
    deliveryCost.classList.remove("free");
    deliveryCost.innerText = "250 ₽";
    cartFreeDelivary.style.display = "block";
  }
}
