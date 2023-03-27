const express = require("express")
const PORT = 8080;

const app = express()

app.listen
(
    PORT, 
    () =>
    {
        console.log(`Live at http://localhost:${PORT}`)
    }
)

app.use(express.static("public"))

app.get
(
    "/", 
    (request, response) =>
    {
        response.sendFile(__dirname + "/public/pages/index.html")
    }
)
