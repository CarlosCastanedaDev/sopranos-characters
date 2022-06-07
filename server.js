const express = require('express')
const res = require('express/lib/response')
const app = express()
const PORT = 8000

const sopranos = {
    "tony soprano": {
        name: 'anthony john soprano',
        aliases: "tone, t, tony uncle-johnny",
        firstEpisode: "the sopranos",
        lastEpisode: "made in america",
        portrayedBy: "james gandolfini"
    },
    "carmela soprano": {
        name: "carmela soprano",
        aliases: "none",
        firstEpisode: "the sopranos",
        lastEpisode: "made in america",
        portrayedBy: "edie falco"   
    },
    "meadow soprano": {
        name: "meadow soprano",
        aliases: "none",
        firstEpisode: "the sopranos",
        lastEpisode: "made in america",
        portrayedBy: "jamie-lynn sigler"   
    },
    "aj soprano": {
        name: "anthony soprano, jr.",
        aliases: "googotz",
        firstEpisode: "the sopranos",
        lastEpisode: "made in america",
        portrayedBy: "robert iler"   
    },
    "christopher moltisanti": {
        name: "christopher moltisanti",
        aliases: "chrissy, chris maceveety, chris montevani",
        firstEpisode: "the sopranos",
        lastEpisode: "kennedy and heidi",
        portrayedBy: "michael imperioli"   
    },
    "junior soprano": {
        name: "corrado john soprano, jr.",
        aliases: "junior, uncle jun",
        firstEpisode: "the sopranos",
        lastEpisode: "made in america",
        portrayedBy: "dominic chianese"   
    },
    "livia soprano": {
        name: "olivia soprano",
        aliases: "none",
        firstEpisode: "the sopranos",
        lastEpisode: "in camelot",
        portrayedBy: "nancy marchand"   
    },
    "paulie gualtieri": {
        name: "peter paul gualtieri",
        aliases: "paulie walnuts, ted hughes",
        firstEpisode: "the sopranos",
        lastEpisode: "made in america",
        portrayedBy: "tony sirico"   
    },
    "silvio dante": {
        name: "silvio manfred dante",
        aliases: "sil",
        firstEpisode: "the sopranos",
        lastEpisode: "made in america",
        portrayedBy: "steven van zandt"   
    },
    "sal bonpensiero": {
        name: "salvatore bonpensiero",
        aliases: "big pussy, puss",
        firstEpisode: "the sopranos",
        lastEpisode: "remember when",
        portrayedBy: "vincent pastore"   
    },
    "unknown": {
        name: "unknown",
        aliases: "unknown",
        firstEpisode: "unknown",
        lastEpisode: "unknown",
        portrayedBy: "unknown"   
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