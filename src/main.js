// Create variables targetting the relevant DOM elements here 👇
//current cover
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');
//pages
var homeView = document.querySelector('.home-view');
var savedCoversView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');
var savedCoversSection = document.querySelector('.saved-covers-section');
//buttons
var homeButton = document.querySelector('.home-button');
var randomButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var newCoverButton = document.querySelector('.make-new-button');
var generateCoverButton = document.querySelector('.create-new-book-button');
//form inputs

// We've provided a few variables below
var savedCovers = [
  new Cover("http://3.bp.blogspot.com/-iE4p9grvfpQ/VSfZT0vH2UI/AAAAAAAANq8/wwQZssi-V5g/s1600/Do%2BNot%2BForsake%2BMe%2B-%2BImage.jpg", "Sunsets and Sorrows", "sunsets", "sorrows")
];
var currentCover = {
  cover: covers[getRandomIndex(covers)],
  title: titles[getRandomIndex(titles)],
  tagline1: descriptors[getRandomIndex(descriptors)],
  tagline2: descriptors[getRandomIndex(descriptors)],

};
//homepage
coverImage.src = currentCover.cover;
coverTitle.innerText = currentCover.title;
coverTagline1.innerText = currentCover.tagline1;
coverTagline2.innerText = currentCover.tagline2;



// Add your event listeners here 👇
homeButton.onclick = viewHome;
randomButton.onclick = randomCover;
newCoverButton.onclick = viewForm;
viewSavedButton.onclick = viewSavedCover;
generateCoverButton.onclick = generateCustomCover;
saveCoverButton.onclick = saveCover;


// Create your event handlers and other functions here 👇
function randomCover() {
 currentCover = new Cover(covers[getRandomIndex(covers)], titles[getRandomIndex(titles)], descriptors[getRandomIndex(descriptors)], descriptors[getRandomIndex(descriptors)]);
 coverImage.src = currentCover.cover;
 coverTitle.innerText = currentCover.title;
 coverTagline1.innerText = currentCover.tagline1;
 coverTagline2.innerText = currentCover.tagline2;
}

function viewForm() {
  homeView.style.display = "none";
  savedCoversView.style.display = "none";
  formView.style.display = "block";
  homeButton.style.display = "block";
  randomButton.style.display = "none";
  saveCoverButton.style.display = "none";
  viewSavedButton.style.display = "block";
  newCoverButton.style.display = "none";
}

function viewSavedCover() {
  homeView.style.display = "none";
  savedCoversView.style.display = "block";
  formView.style.display = "none";
  homeButton.style.display = "block";
  randomButton.style.display = "none";
  saveCoverButton.style.display = "none";
  viewSavedButton.style.display = "none";
  newCoverButton.style.display = "block";
  //this is what creates all the saved covers
  for (var i=0; i<savedCovers.length; i++) { //iterates every index in the saved covers
    var span = document.createElement("span"); // this creates a span for each cover
    savedCoversSection.append(span); // this adds that span to the saved covers page
      span.classList.add("mini-cover"); //this adds the css style to the span we created
      span.innerHTML =`
        <img class = "cover-image" src=${savedCovers[i].cover}>
        <h2 class = "cover-title ">${savedCovers[i].title}</h2>
        <h3 class = "tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
        <img class="price-tag" src="./assets/price.png">
        <img class="overlay" src="./assets/overlay.png">
        `;// lines 83-89 are put into the span we created. It contains the html that creates the covers, and the css that styles them. I modeled them after the main cover.
  }
}

function viewHome() {
  homeView.style.display = "block";
  savedCoversView.style.display = "none";
  formView.style.display = "none";
  homeButton.style.display = "none";
  randomButton.style.display = "block";
  saveCoverButton.style.display = "block";
  viewSavedButton.style.display = "block";
  newCoverButton.style.display = "block";
}


function generateCustomCover() {
  event.preventDefault();
  var imageInput = document.querySelector('.user-cover').value;
  var titleInput = document.querySelector('.user-title').value;
  var descriptor1Input = document.querySelector('.user-desc1').value;
  var descriptor2Input = document.querySelector('.user-desc2').value;
  currentCover = new Cover(imageInput, titleInput, descriptor1Input, descriptor2Input);
  coverImage.src = currentCover.cover;
  coverTitle.innerText = currentCover.title;
  coverTagline1.innerText = currentCover.tagline1;
  coverTagline2.innerText = currentCover.tagline2;
  covers.push(imageInput);
  titles.push(titleInput);
  descriptors.push(descriptor1Input, descriptor2Input);
  viewHome();
}

function saveCover() { //this saves the current cover as long as it's unique
  for (var i=0; i<savedCovers.length; i++) {
    if (savedCovers.indexOf(currentCover) === -1) {
      savedCovers.unshift(currentCover);
    }
  }
}

// We've provided one function to get you started
function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);

}
