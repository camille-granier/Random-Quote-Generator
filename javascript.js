const quotes = [
  {
    quote:"Love For All, Hatred For None.",
    author:"Khalifatul Masih III"
  },
  {
    quote:"Change the world by being yourself.",
    author:"Amy Poehler"
  },
  {
    quote:"Every moment is a fresh beginning.",
    author:"T.S Eliot"
  },
  {
    quote:"Never regret anything that made you smile.",
    author:"Mark Twain"
  },
  {
    quote:"Everything you can imagine is real.",
    author:"Pablo Picasso"
  },
  {
    quote:"Have enough courage to start and enough heart to finish.",
    author:"Jessica N. S. Yourko"
  },
  {
    quote:"Try to be a rainbow in someone’s cloud.",
    author:"Maya Angelou"
  },
  {
    quote:"Embrace the glorious mess that you are.",
    author:"Elizabeth Gilbert"
  },
  {
    quote:"Normality is a paved road: it’s comfortable to walk but no flowers grow.",
    author:"Vincent van Gogh"
  },
  {
    quote:"Give me the courage to change what I can change, the serenity to accept what I cannot change and the wisdom to make the differences between both.",
    author:"Marcus Aurelius"
  },
];

var colors = [
  "#f76b8a",
  "#66bfbf",
  "#ffb5b5",
  "#407088",
  "#8971d0",
  "#6643b5",
  "#fdb44b",
  "#76b39d",
  "#962071"
];
var color = Math.floor(Math.random()*colors.length);

function generateQuote() {
  let randomNumber = Math.floor(Math.random()*quotes.length)
  document.getElementById("text").innerHTML = quotes[randomNumber].quote;
  document.getElementById("author").innerHTML = quotes[randomNumber].author;
};
window.onload = function() {
  generateQuote();
  document.getElementById("new-quote").addAventListener('click', generateQuote());
};
currentQuote = generateQuote.quote;
currentAuthor = generateQuote.author
$("#tweet-quote").attr('href','https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text='+ encodeURIComponent('"' + currentQuote + '" ' + currentAuthor));
