const newDeck_btn = document.getElementById("newDeck")
var n // Number of decks in the deckContainer div

newDeck_btn.addEventListener("click", () =>
{
  newDeck_btn.style.cssText = 
  `
  --scale_factor: 0.5;
  --scale_inverse: calc(1 / var(--scale_factor));

  transform: scale(var(--scale_factor)) translate(calc(var(--scale_inverse) * -50%), calc(var(--scale_inverse) * -50%)) translate(0, -30vh);
  `
})


