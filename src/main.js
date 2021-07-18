
var coverImage = document.querySelector('.cover-image');
var coverTitle = document.querySelector('.cover-title');
var coverTagline1 = document.querySelector('.tagline-1');
var coverTagline2 = document.querySelector('.tagline-2');

var homeView = document.querySelector('.home-view');
var savedCoversView = document.querySelector('.saved-view');
var formView = document.querySelector('.form-view');
var savedCoversSection = document.querySelector('.saved-covers-section');

var homeButton = document.querySelector('.home-button');
var randomButton = document.querySelector('.random-cover-button');
var saveCoverButton = document.querySelector('.save-cover-button');
var viewSavedButton = document.querySelector('.view-saved-button');
var newCoverButton = document.querySelector('.make-new-button');
var generateCoverButton = document.querySelector('.create-new-book-button');

var savedCovers = [];

randomCover();



homeButton.onclick = viewHome;
randomButton.onclick = randomCover;
newCoverButton.onclick = viewForm;
viewSavedButton.onclick = viewSavedCover;
generateCoverButton.onclick = generateCustomCover;
saveCoverButton.onclick = saveCover;



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
  randomCover();
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
  document.querySelector(".saved-covers-section").innerHTML = "";

  for (var i=0; i<savedCovers.length; i++) {
      document.querySelector(".saved-covers-section").innerHTML +=`
        <span class = "mini-cover" id ="${savedCovers[i].id}" ondblclick="deleteCover(this.id)"">
          <img class = "cover-image" src=${savedCovers[i].cover}>
          <h2 class = "cover-title ">${savedCovers[i].title}</h2>
          <h3 class = "tagline">A tale of <span class="tagline-1">${savedCovers[i].tagline1}</span> and <span class="tagline-2">${savedCovers[i].tagline2}</span></h3>
          <img class = "price-tag" src="./assets/price.png">
          <img class = "overlay" src="./assets/overlay.png">
        </span>
        `;
  }
  randomCover();
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

function saveCover() {
    if (savedCovers.includes()=== false) {
      savedCovers.push(currentCover);
    }
}

function deleteCover(clickedId) {
  var selectedCover = document.getElementById(clickedId);
    selectedCover.remove();
  for (var i = 0; i < savedCovers.length; i++) {
    if (savedCovers[i].id == clickedId) {
      savedCovers.splice(i, 1);
    }
  }
}

function getRandomIndex(array) {
  return Math.floor(Math.random() * array.length);

}
