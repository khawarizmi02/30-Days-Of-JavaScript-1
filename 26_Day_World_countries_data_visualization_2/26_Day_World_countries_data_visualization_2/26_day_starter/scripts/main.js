const startingWordButton = document.querySelector('#starting-word');
const anyWordButton = document.querySelector('#any-word');
const alphabetButton = document.querySelector('#alphabetically');
const countryList = document.querySelector('#list-country');

let fromAtoZ = true;

alphabetButton.addEventListener('click', function () {
  if (fromAtoZ) fromAtoZ = false;
  else fromAtoZ = true;

  console.log(fromAtoZ);
});

startingWordButton.addEventListener('click', function () {
  countryList.innerHTML = '';

  let getCountryName = document.querySelector('#country').value;
  let firstLetter = getCountryName.toUpperCase();

  let searchResult = countries.filter((item) => {
    return firstLetter === item.charAt(0);
  });
  if (fromAtoZ === true) fromAtoZ = true;
  else {
    searchResult.sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
    });
  }

  for (const name of searchResult) {
    countryList.innerHTML += `${name} </br>`;
  }
});

anyWordButton.addEventListener('click', function () {
  countryList.innerHTML = '';

  let getCountryName = document.querySelector('#country').value;

  let searchResult = [];

  searchResult = countries.filter((item) => {
    return item.includes(getCountryName);
  });

  if (fromAtoZ === true) fromAtoZ = true;
  else {
    searchResult.sort((a, b) => {
      if (a < b) return 1;
      if (a > b) return -1;
    });
  }

  for (const name of searchResult) {
    countryList.innerHTML += `${name} </br>`;
  }
});

let getCountryName = document.querySelector('#country');
getCountryName.addEventListener('keypress', function (event) {
  if (getCountryName.value.length >= 1) {
    event.preventDefault();
  }
});
