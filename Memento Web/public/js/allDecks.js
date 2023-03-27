const newDeck_btn = document.getElementById("newDeck")
var n // Number of decks in the deckContainer div
var noOfClicks = 0

if (noOfClicks == 0) // Does the initial zoom out animation of the newDeck button
{
  newDeck_btn.addEventListener("click", () =>
  {
    newDeck_btn.style.cssText = 
    `
    --scale_factor: 0.7;
    --scale_inverse: calc(1 / var(--scale_factor));
  
    transform: scale(var(--scale_factor)) translate(calc(var(--scale_inverse) * -50%), calc(var(--scale_inverse) * -50%)) translate(0, -35vh);
    `
    
  })  
}

newDeck_btn.addEventListener("click", () =>
{
  const deckContainer = document.getElementById("decks")
  var newDeck_card = document.createElement("button")
  var buttonText = document.createElement("div")
  var icon = document.createElement("div")

  var shadow1 = document.createElement("img")
  var shadow1_svg = 
  `
  <svg id="shadow_1" width="73" height="73" viewBox="0 0 73 73" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.5757 0.0757042L72.7271 0.0757148L0.0756923 72.7271L0.0757018 40.5757L40.5757 0.0757042Z" fill-opacity="0.8"/>
  </svg>
  `
  var shadow1_URI = `data:image/svg+xml;base64,${btoa(shadow1_svg)}`

  var shadow2 = document.createElement("img")
  var shadow2_svg =
  `
  <svg id="shadow_1" width="73" height="73" viewBox="0 0 73 73" xmlns="http://www.w3.org/2000/svg">
    <path d="M40.5757 0.0757042L72.7271 0.0757148L0.0756923 72.7271L0.0757018 40.5757L40.5757 0.0757042Z" fill-opacity="0.8"/>
  </svg>
  `
  var shadow2_URI = `data:image/svg+xml;base64,${btoa(shadow2_svg)}`

  n = deckContainer.childElementCount
  newDeck_card.className = "roundSquare"
  newDeck_card.id = "deck" + (n-1)
  buttonText.className = "buttonText"
  buttonText.id = "newDeck_card_buttonText"

  icon.style.cssText = 
  `
  font-family: "Apple Color Emoji";
  src: url('AppleColorEmoji.ttf') format('truetype');
  font-size: 5rem;
  outline: none;
  `


  
  deckContainer.style.cssText = // Fix the apparent positioning problem here
  `
  position: flex;
  margin-left: 12rem;
  margin-right: 10rem;
  `

  newDeck_card.style.cssText =
  `
  position: relative;
  width: 15rem;
  height: 15rem;
  margin-left: 2rem;
  margin-top: 3rem;
  background-color: #F5FF87;
  box-shadow: 0 var(--shadow) 0 #E9EE00
  `
  

  newDeck_card.addEventListener("mouseover", function() 
  {
      this.style.backgroundColor = "#E5FF6  7"
  })

  newDeck_card.addEventListener("mouseleave", function() 
  {
      this.style.backgroundColor = "#F5FF87"
      this.style.transform = "translate(0, 1*var(--shadow))" // Lifts up the button automatically when I leave it clicked
      this.style.boxShadow = "0 var(--shadow) 0 #E9EE00"
  })

  newDeck_card.addEventListener("mousedown", function() 
  {
    this.style.boxShadow = "none"
    this.style.transform = "translate(0, var(--shadow))"
    this.style.transition = "150ms"
  });

  newDeck_card.addEventListener("mouseup", function() 
  {
    this.style.boxShadow = "0 var(--shadow) 0 #E9EE00"
    this.style.transform = "translate(0, 1*var(--shadow))"
    this.style.transition = "150ms"
  })

  shadow1.src = shadow1_URI
  shadow1.id = "rs_Shadow_ad1"
  shadow1.draggable = "false"
  shadow2.src = shadow2_URI
  shadow2.id = "rs_Shadow_ad2"
  shadow2.draggable = "false"
  buttonText.innerHTML = "Untitled"
  icon.innerHTML = "❄️"

  icon.contentEditable = "true"

  buttonText.contentEditable = "true"
  buttonText.style.outline = "none"
  deckContainer.appendChild(newDeck_card)
  newDeck_card.appendChild(shadow1)
  newDeck_card.appendChild(shadow2)
  newDeck_card.appendChild(buttonText)
  newDeck_card.appendChild(icon)
})




