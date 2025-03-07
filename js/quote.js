const quotes = [
    { quote: "실패는 과정일 뿐.", author: "-에디슨-" },
    { quote: "끝까지 하면 된다.", author: "-미상-" },
    { quote: "천천히, 그러나 멈추지 마라.", author: "-공자-" },
    { quote: "지금 이 순간을 살아라.", author: "-톨스토이-" },
    { quote: "오늘이 가장 젊다.", author: "-미상-" },
    { quote: "할 수 있다고 믿어라.", author: "-나폴레옹-" },
    { quote: "변화가 없으면 기회도 없다.", author: "-존 F. 케네디-" }
];

const quote = document.querySelector("#quote-box span:first-child");
const author = document.querySelector("#quote-box span:last-child")

function updateQuote() {
    const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];
    quote.innerText = todaysQuote.quote;
    author.innerText = todaysQuote.author;
}

updateQuote();

setInterval(updateQuote, 5000);
