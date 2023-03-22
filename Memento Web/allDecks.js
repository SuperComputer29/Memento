const newDeck_btn = document.getElementById("newDeck")
var undefined
var n


newDeck_btn.addEventListener("click", e => 
{
    newDeck_btn.style.transform = "scale(0.5) translate(-100%, -100%) translate(0, -50vh)"
    var deckCard = document.createElement("button")
    var shadow1 = document.createElement("img")
    var shadow2 = document.createElement("img")
    var deckContainer = document.getElementById("decks")
    var n = deckContainer.childElementCount
    
    deckCard.className = "roundSquare"
    deckCard.id = "deck" + (n+1)

    // CSS properties for the button
    deckCard.style.position = 'relative'
    deckCard.style.marginTop = '3rem'
    deckCard.style.left = '50%'
    deckCard.style.top = '5rem'
    deckCard.style.width = '15rem'
    deckCard.style.height = '15rem'
    deckCard.style.transform = 'translate(-50%)'
    deckCard.style.backgroundColor = '#F5FF87'
    deckCard.style.boxShadow = '0 var(--shadow) 0 #E9EE00'
    deckCard.style
    deckContainer.appendChild(deckCard)

    // CSS properties for the shadows

    shadow1.id = "rs_Shadow_ad1"
    shadow1.src = "Assets/Images/button_shadow.svg"
    shadow1.draggable = "false"
    shadow2.id = "rs_Shadow_ad2"
    shadow2.src = "Assets/Images/button_shadow.svg"
    shadow2.draggable = "false"
    
    deckCard.appendChild(shadow1)
    deckCard.appendChild(shadow2)

    deckCard.addEventListener("mouseover", function() 
    {
        this.style.backgroundColor = "#C9EE00";
    });
      
    deckCard.addEventListener("mousedown", function() 
    {
      this.style.boxShadow = "none";
      this.style.transform = "translate(-50%, var(--shadow))";
      this.style.transition = "150ms";
    });
    
    deckCard.addEventListener("mouseup", function() 
    {
      this.style.boxShadow = "0 var(--shadow) 0 #E9EE00";
      this.style.transform = "translate(-50%)";
      this.style.transition = "150ms";
    });
})

