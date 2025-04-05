const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */

const imgArray = ['../waImages/pic1.jpg', '../waImages/pic2.jpg', '../waImages/pic3.jpg', '../waImages/pic4.jpg', '../waImages/pic5.jpg'];

/* Declaring the alternative text for each image file */

const altTxts = {'../waImages/pic1.jpg' : 'Closeup of a human eye',
'../waImages/pic2.jpg' : 'An alleged space rock',
'../waImages/pic3.jpg' : 'Pretty purple flowers',
'../waImages/pic4.jpg' : 'Egyptian art',
'../waImages/pic5.jpg' : 'A butterfly with beautiful wings'}; 

/* Looping through images */

for(let i = 0; i < 5; i++){
const newImage = document.createElement('img');
newImage.setAttribute('src', imgArray[i]);
newImage.setAttribute('alt', altTxts[i]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
});
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', e =>{
    const currentClass = btn.getAttribute("class");
    if(currentClass == "dark")
    {
    btn.setAttribute("class", "light");
    btn.textContent = "Lighten";
    overlay.style.backgroundColor = "rgb(0 0 0 / 50%)";
    }
    else
    {
    btn.setAttribute("class", "dark");
    btn.textContent = "Darken";
    overlay.style.backgroundColor = "rgb(0 0 0 / 0%)";
    }
})
