const express = require('express')
const res = require('express/lib/response')
const app = express()
const PORT = 8000

const sopranos = {
    "tony soprano": {
        firstEpisode: "pilot",
        lastEpisode: "member's only"
    },
    "carmela soprano": {
        firstEpisode: "pilot",
        lastEpisode: "member's only"    
    },
    "unknown": {
        firstEpisode: "unknown",
        lastEpisode: "unknown"
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + '/index.html')
})

app.get('/api/:name', (request, response) => {
    const characterName = request.params.name.toLowerCase()
    if (sopranos[characterName]){
        response.json(sopranos[characterName])
    }else{
        response.json(sopranos['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`The server is now running on port ${PORT}`)
})