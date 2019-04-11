const ratings = {
  raazi: 4.7,
  badhaaiHo: 3.4,
  stree: 4.0,
  hindiMedium: 3.5,
  dangal: 4.4,
  toiletEkPremKatha: 3.5,
  bareillyKiBarfi: 3.2,
  badrinathKiDulhania: 3.3,
  pink: 4.1,
  sultan: 3.0,
  neerja: 4.7,
  kapoorAndSons: 4.0,
  udtaPunjab: 4.4,
  bajiraoMastani: 4.5,
  badlapur: 2.4,
  bajrangiBhaijaan: 4.0,
  piku: 4.7,
  queen: 4.7,
  tanuWedsManuReturns: 3.0,
  bhaagMilkhaBhaag: 4.0,
  twoStates: 3.3,
  haider: 4.7,
  maryKom: 4.3,
  pk: 4.4,
  englishVinglish: 4.5,
  kahaani: 4.4,
  vickyDonor: 3.0,
  donTwo: 2.4,
  rockstar: 3.8,
  theDirtyPicture: 4.4,
  barfi: 4.4,
  zindagiNaMilegiDobara: 3.3,
  chennaiExpress: 2.5,
  ramLeela: 4.1,
  raanjhanaa: 3.8,
  yehJawaaniHaiDeewani: 4.0,
  noOneKilledJessica: 3.5

}

const starsTotal = 5;
const filmSelection = document.querySelector('.select-film');
const ratingControl = document.querySelector('#rating-control');
let film;

function initialize() {
  getRatings()
}

function getRatings() {
  for (let rating in ratings) {
    const starPercentage = (ratings[rating] / starsTotal) * 100;
    const roundedPercentage = `${Math.round(starPercentage / 10) * 10}%`
    document.querySelector(`.${rating} .stars-inner`).style.width = roundedPercentage;
    document.querySelector(`.${rating} .number-rating`).innerHTML = ratings[rating]
  }
}

filmSelection.addEventListener('change', (event) => {
  film = event.target.value;
  ratingControl.disabled = false;
  ratingControl.value = ratings[film]
})

ratingControl.addEventListener('blur', (event) => {
  const rating = event.target.value;
  if (rating > 5) {
    alert('Please award 5 stars or less only')
    return;
  }
  ratings[film] = rating;
  getRatings();
})


initialize()
