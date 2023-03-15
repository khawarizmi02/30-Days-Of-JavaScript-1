// console.log(country);

const getCharacter = document.querySelector('#character');
const getName = document.querySelector('#name');
const getCapital = document.querySelector('#capital');
const getPopulation = document.querySelector('#population');
const getChart = document.querySelector('#chart');
const getWorldPopulation = document.querySelector('#world-population');

let getDiv = document.querySelector('#content');

let name = true;
let capital = false;
let population = false;

getCharacter.addEventListener('input', function listCountries() {
  getWorldPopulation.innerHTML = '';
  let getHint = getCharacter.value;
  let searchResult = [];

  searchResult = country.filter((item) => {
    return item.name.includes(getHint);
  });

  if (name === true) {
    searchResult.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  }

  if (population === true) {
    searchResult.sort((a, b) => {
      if (a.population < b.population) return 1;
      if (a.population > b.population) return -1;
      return 0;
    });
  }

  if (capital === true) {
    searchResult.sort((a, b) => {
      if (a.capital < b.capital) return 1;
      if (a.capital > b.capital) return -1;
      return 0;
    });
  }

  let countList = 0;
  let getDiv = document.querySelector('#content');
  getDiv.innerHTML = '';

  searchResult.forEach((element) => {
    if (countList < 15) {
      getDiv.innerHTML += ` 
      <div class="grid-container">
      <img src="${element.flag}" alt="your-image-description">
      <h2>${element.name}</h2>
      <p>${element.capital}</p>
      <p>${element.area}</p>
      </div>`;

      countList++;
    }
  });

  console.log(countList);
});

getName.addEventListener('click', function () {
  if (name === true) {
    name = false;

    population = true;
    capital = false;
  } else {
    name = true;
    population = false;
    capital = false;
  }

  getWorldPopulation.innerHTML = '';
  let getHint = getCharacter.value;
  let searchResult = [];
  searchResult = country.filter((item) => {
    return item.name.includes(getHint);
  });

  if (name === true) {
    searchResult.sort((a, b) => {
      if (a.name < b.name) return 1;
      if (a.name > b.name) return -1;
      return 0;
    });
  }

  let countList = 0;
  let getDiv = document.querySelector('#content');
  getDiv.innerHTML = '';

  searchResult.forEach((element) => {
    if (countList < 15) {
      getDiv.innerHTML += ` 
      <div class="grid-container">
      <img src="${element.flag}" alt="your-image-description">
      <h2>${element.name}</h2>
      <p>${element.capital}</p>
      <p>${element.area}</p>
      </div>`;

      countList++;
    }
  });
});

getCapital.addEventListener('click', function () {
  if (capital === true) {
    name = true;

    population = true;
    capital = false;
  } else {
    name = false;
    population = false;
    capital = true;
  }

  getWorldPopulation.innerHTML = '';
  let getHint = getCharacter.value;
  let searchResult = [];
  searchResult = country.filter((item) => {
    return item.name.includes(getHint);
  });

  if (capital === true) {
    searchResult.sort((a, b) => {
      if (a.capital < b.capital) return 1;
      if (a.capital > b.capital) return -1;
      return 0;
    });
  }

  let countList = 0;
  let getDiv = document.querySelector('#content');
  getDiv.innerHTML = '';

  searchResult.forEach((element) => {
    if (countList < 15) {
      getDiv.innerHTML += ` 
      <div class="grid-container">
      <img src="${element.flag}" alt="your-image-description">
      <h2>${element.name}</h2>
      <p>${element.capital}</p>
      <p>${element.area}</p>
      </div>`;

      countList++;
    }
  });
});

getPopulation.addEventListener('click', function () {
  if (population === true) {
    name = true;

    population = false;
    capital = false;
  } else {
    name = false;
    population = true;
    capital = false;
  }

  getWorldPopulation.innerHTML = '';
  let getHint = getCharacter.value;
  let searchResult = [];
  searchResult = country.filter((item) => {
    return item.name.includes(getHint);
  });

  if (population === true) {
    searchResult.sort((a, b) => {
      if (a.population < b.population) return 1;
      if (a.population > b.population) return -1;
      return 0;
    });
  }

  let countList = 0;
  let getDiv = document.querySelector('#content');
  getDiv.innerHTML = '';

  searchResult.forEach((element) => {
    if (countList < 15) {
      getDiv.innerHTML += ` 
      <div class="grid-container">
      <img src="${element.flag}" alt="your-image-description">
      <h2>${element.name}</h2>
      <p>${element.capital}</p>
      <p>${element.area}</p>
      </div>`;

      countList++;
    }
  });
});

getChart.addEventListener('click', function () {
  getDiv.innerHTML = '';

  getWorldPopulation.innerHTML = `
  <div class="wrapper">
        <div class="graph-buttons">
          <button id="population-chart" class="population">Population</button>
          <button id="languages" class="languages">Languages</button>
        </div>
        <h4 class="graph-title">World Population</h4>
        <div class="graphs">
          <div class="graph-wrapper" id="stat"></div>
        </div>
  </div>`;

  const getPopulationButton = document.querySelector('#population-chart');
  const getLanguageButton = document.querySelector('#languages');
  const getGraphContent = document.querySelector('#stat');

  getPopulationButton.addEventListener('click', function () {
    getGraphContent.innerHTML = '';
    let getMaxPopulation = 0;
    let countryPopulationArray = [];

    country.forEach((element) => {
      getMaxPopulation += element.population;

      countryPopulationArray.push({
        name: element.name,
        population: element.population,
      });
    });

    countryPopulationArray.sort((a, b) => {
      if (a.population > b.population) return -1;
      if (a.population < b.population) return 1;
      return 0;
    });
    getGraphContent.innerHTML = `World : ${getMaxPopulation}<br/>`;

    for (let i = 0; i < 10; i++) {
      getGraphContent.innerHTML += `${countryPopulationArray[i].name} : ${countryPopulationArray[i].population}<br/>`;
    }
  });

  getLanguageButton.addEventListener('click', function () {
    getGraphContent.innerHTML = '';
    let languageCount = {};

    country.forEach((country) => {
      country.languages.forEach((language) => {
        if (language in languageCount) {
          languageCount[language]++;
        } else {
          languageCount[language] = 1;
        }
      });
    });

    let languageUsageCounts = [];

    for (let language in languageCount) {
      languageUsageCounts.push({
        language: language,
        count: languageCount[language],
      });
    }

    languageUsageCounts.sort((c, d) => {
      if (c.count > d.count) return -1;
      if (c.count < d.count) return 1;
      return 0;
    });


    for (let i = 0; i < 10; i++) {
      getGraphContent.innerHTML += `${languageUsageCounts[i].language} : ${languageUsageCounts[i].count}<br/>`;
    }
  });
});
