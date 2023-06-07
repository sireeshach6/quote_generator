let arrQuotes = ["Start before you’re ready. - Steven Pressfield",
"If I waited for perfection, I would never write a word. - Margaret Atwood",
"You can make anything by writing. - C.S. Lewis",
"Every day brings new choices. - Martha Beck",
"It is never too late to be what you might have been. - George Eliot",
"Success is the sum of small efforts repeated day in and day out. - Robert Collier",
"You can always edit a bad page. You can’t edit a blank page - Jodi Picoult"
]

function getRandomNumber(num){
    randomNum = Math.floor(Math.random() * num);
    return randomNum;

}

function getQuote(arrQuotes){
    let randomNumber = getRandomNumber(arrQuotes.length);
    let quote = arrQuotes[randomNumber];
    return quote.split(" - ");
}
var splitQuote = getQuote(arrQuotes);

console.log(splitQuote[0]);
console.log('Author: '+ splitQuote[1]);

