const cards = document.querySelectorAll(".card");
for (const card of cards) {
  card.addEventListener("click", () => {
    card.style.animation = "zIndexChange 0.8s 1 forwards";
    card.firstElementChild.style.animation = "cardFlip 0.8s 1 forwards";
  })
}