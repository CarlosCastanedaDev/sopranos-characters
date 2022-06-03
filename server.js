const express = require('express')
const app = express()
const PORT = 8000

let sopranos = {
    "name": "tony sopranos",
    "first episode": "pilot",
    "last episode": "member's only"
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
    console.log(`The server is running on port ${PORT}`)
})

app.listen(PORT, () => {

})