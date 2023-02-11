window.addEventListener("click", (e) => {
  const targetAction = e.target.dataset.action;
  let counter;
  if (targetAction === "minus" || targetAction === "plus") {
    const counterWrapper = e.target.closest(".counter-wrapper");
    counter = counterWrapper.querySelector("[data-counter]");
  }

  if (targetAction === "minus") {
    if (
      e.target.closest(".cart-wrapper") &&
      parseInt(counter.innerText) === 1
    ) {
      e.target.closest(".cart-item").remove();
      toggleCartStatus();
      calcCartPrice();
    } else if (parseInt(counter.innerText) > 1) {
      counter.innerText--;
    }
  }

  if (targetAction === "plus") {
    counter.innerText++;
  }
  if (
    e.target.hasAttribute("data-action") &&
    e.target.closest(".cart-wrapper")
  ) {
    calcCartPrice();
  }
});
