var newQuoteBtn = document.querySelector('#js-new-quote');
var answerBtn = document.querySelector('#js-tweet');

var endpoint = "https://trivia.cyberwisp.com/getrandomchristmasquestion"

let current = {
    question: "",
    answer: ""
};

newQuoteBtn.addEventListener('click', getQuote);
answerBtn.addEventListener('click', displayAnswer);

async function getQuote() {
    try {
        const response = await fetch(endpoint);

        if(!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        // console.log(json);
        current.question = json.question;
        current.answer = json.answer;
        displayQuote(json.question);

        document.querySelector('#js-answer-text').textContent = '';
        

    } catch(err) {
        console.log(err);
        alert('Fail');
    }
}

function displayQuote(quote) {
    const quoteText = document.querySelector('#js-quote-text');
    quoteText.textContent = quote;
}

function displayAnswer() {
    const answerText = document.querySelector('#js-answer-text');
    answerText.textContent = current.answer;
}

getQuote();