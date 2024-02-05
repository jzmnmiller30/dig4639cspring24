const generateQuote =function () {
    const quotes = [

    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela"
    },

    {
        quote: "The way to get started is to quit talking and begin doing.",
        author: "Walt Disney"
    },

    {
        quote: "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma which is living with the results of other people's thinking.",
        author: "Steve Jobs"
    },

    {
        quote: "If you dont take risks, you cant create a future!",
        author: "Monkey D. Luffy (One Piece)"
    },

    {
        quote: "Forgetting is like a wound. The wound may heal but it has already left a scar.",
        author: "Monkey D Luffy (One Piece)"
    },

    {
        quote: "The world isnt perfect But its there for us doing the best it can thats what makes it so damn beautiful.",

        author: " Roy Mustang (Full Metal Alchemist)"
    },


    ];

    let arrayIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quotes").innerHTML = quotes[arrayIndex].quote;
    document.getElementById("author").innerHTML = quotes[arrayIndex].author;

    }

    window.onload = function() {
        generateQuote();
        document.getElementById("generate").addEventListener('click', generateQuote);
    }
