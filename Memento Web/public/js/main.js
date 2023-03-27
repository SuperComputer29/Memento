const allDecks_btn = document.getElementById("allDecks")
const currentDeck_btn = document.getElementById("currentDeck")
var timeDelay = 150 // in milliseconds

allDecks_btn.addEventListener("click", e =>
{
    setTimeout( () =>
    {
        window.open("../pages/allDecks.html", "_self")
    }, timeDelay)

})

currentDeck_btn.addEventListener("click", e =>
{
    console.log("HEY")
})