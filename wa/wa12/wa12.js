var newQuoteBtn = document.querySelector('#js-new-quote');
var answerBtn = document.querySelector('#js-tweet');
var imageBtn = document.querySelector('#js-st-image');

var endpoint = "https://strangerthingsquotes.shadowdev.xyz/api/quotes"

let current = {
    quote: "",
    author: ""
};

const characterImages = {
    'Eleven' : './wa12Images/Eleven.jpg',
    'Joyce Byers' : './wa12Images/Joyce.jpg',
    'Will Byers' : './wa12Images/Will.jpg',
    'Max Mayfield' : './wa12Images/Max.jpg',
    'Jim Hopper' : './wa12Images/Jim.jpg',
    'Jonathan Byers' : './wa12Images/Jonathan.jpg',
    'Mike Wheeler' : './wa12Images/Mike.jpg',
    'Sam Owens' : './wa12Images/Sam.jpg',
    'Steve Harrington' : './wa12Images/Steve.jpg',
    'Nancy Wheeler' : './wa12Images/Nancy.jpg',
    'Ted Wheeler' : './wa12Images/Ted.jpg',
    'Bob Newby' : './wa12Images/Bob.jpg',
    'Dustin Henderson' : './wa12Images/Dustin.jpg',
    'Lucas Sinclair' : './wa12Images/Lucas.jpg',
    'Kali Prasad' : './wa12Images/Kali.jpg',
    'Murray Bauman' : './wa12Images/Murray.jpg',
    'Robin Buckley' : './wa12Images/Robin.jpg',
    'Keith' : './wa12Images/Keith.jpg',
    'Erica Sinclair' : './wa12Images/Erica.jpg',
    'Mr.Clarke' : './wa12Images/Clarke.jpg'
}

newQuoteBtn.addEventListener('click', getQuote);
answerBtn.addEventListener('click', displayAnswer);
imageBtn.addEventListener('click', displayImage);

async function getQuote() {
    try {
        const response = await fetch(endpoint);
        
        if(!response.ok) {
            throw Error(response.statusText);
        }

        const json = await response.json();
        // console.log(json);
        current.quote = json[0].quote;
        current.author = json[0].author;
        displayQuote(current.quote);

        document.querySelector('#js-answer-text').textContent = '';
        document.querySelector('#js-image').style.display = 'none';

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
    answerText.textContent = current.author;
}

function displayImage() {
    const showImage = document.querySelector('#js-image');
    showImage.setAttribute('src', characterImages[current.author]);
    showImage.style.display = 'block';
}

getQuote();