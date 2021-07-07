let apiQuotes = []

// show new quote
function newQuote() {
    // pick a random quote from apiQuote array
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)]
}


// Get quote from api
async function getQuotes() {
    const apiUrl = 'https://type.fit/api/quotes'
    try {
        const response = await fetch(apiUrl)
        apiQuotes = await response.json()
        newQuote()
    } catch (error) {
        // catch error here
    }
}

//  on loaded
getQuotes()