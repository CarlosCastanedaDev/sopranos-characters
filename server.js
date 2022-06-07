const express = require('express')
const res = require('express/lib/response')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

const sopranos = {
    "tony soprano": {
        name: 'Anthony John Soprano',
        aliases: "Tone, T, Tony Uncle-Johnny",
        firstEpisode: "The Sopranos",
        lastEpisode: "Made in America",
        portrayedBy: "James Gandolfini",
        url: "assets/tony.jpg"
    },
    "carmela soprano": {
        name: "Carmela Soprano",
        aliases: "None",
        firstEpisode: "The Sopranos",
        lastEpisode: "Made in America",
        portrayedBy: "Edie Falco",
        url: "assets/carmela.jpg"   
    },
    "meadow soprano": {
        name: "Meadow Soprano",
        aliases: "None",
        firstEpisode: "The Sopranos",
        lastEpisode: "Made in America",
        portrayedBy: "Jamie-Lynn Sigler",
        url: "assets/meadow.jpg"   
    },
    "aj soprano": {
        name: "Anthony Soprano, Jr.",
        aliases: "Googotz",
        firstEpisode: "The Sopranos",
        lastEpisode: "Made in America",
        portrayedBy: "Robert Iler",
        url: "assets/aj.jpg"   
    },
    "christopher moltisanti": {
        name: "Christopher Moltisanti",
        aliases: "Chrissy, Chris MacEveety, Chris Montevani",
        firstEpisode: "The Sopranos",
        lastEpisode: "Kennedy and Heidi",
        portrayedBy: "Michael Imperioli",
        url: "assets/chris.jpg"     
    },
    "junior soprano": {
        name: "Corrado John Soprano, Jr.",
        aliases: "Junior, Uncle Jun",
        firstEpisode: "The Sopranos",
        lastEpisode: "Made in America",
        portrayedBy: "Dominic Chianese",
        url: "assets/junior.jpg"     
    },
    "livia soprano": {
        name: "Olivia Soprano",
        aliases: "None",
        firstEpisode: "The Sopranos",
        lastEpisode: "In Camelot",
        portrayedBy: "Nancy Marchand",
        url: "assets/livia.jpg"   
    },
    "paulie gualtieri": {
        name: "Peter Paul Gualtieri",
        aliases: "Paulie Walnuts",
        firstEpisode: "The Sopranos",
        lastEpisode: "Made in America",
        portrayedBy: "Tony Sirico",
        url: "assets/paulie.jpg"     
    },
    "silvio dante": {
        name: "Silvio Manfred Dante",
        aliases: "Sil",
        firstEpisode: "The Sopranos",
        lastEpisode: "Made in America",
        portrayedBy: "Steven van Zandt",
        url: "assets/silvio.jpg"     
    },
    "sal bonpensiero": {
        name: "Salvatore Bonpensiero",
        aliases: "Big Pussy, Puss",
        firstEpisode: "The Sopranos",
        lastEpisode: "Remember When",
        portrayedBy: "Vincent Pastore",
        url: "assets/sal.jpg"     
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