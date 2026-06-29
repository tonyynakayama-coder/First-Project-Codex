const dialog = document.querySelector("#pickup-dialog");
const closeButton = document.querySelector(".close-button");
const pickupTitle = document.querySelector("#pickup-title");
const pickupPrice = document.querySelector("#pickup-price");
const pickupLocation = document.querySelector("#pickup-location");
const pickupTime = document.querySelector("#pickup-time");
const snackCards = document.querySelectorAll(".snack-card");

snackCards.forEach((card) => {
  card.addEventListener("click", () => {
    pickupTitle.textContent = card.dataset.name;
    pickupPrice.textContent = card.dataset.price;
    pickupLocation.textContent = card.dataset.location;
    pickupTime.textContent = card.dataset.time;

    if (typeof dialog.showModal === "function") {
      dialog.showModal();
    } else {
      alert(`${card.dataset.name}\n${card.dataset.price}\nPick up at ${card.dataset.location}`);
    }
  });
});

closeButton.addEventListener("click", () => {
  dialog.close();
});

dialog.addEventListener("click", (event) => {
  if (event.target === dialog) {
    dialog.close();
  }
});
