// console.log(countries);

const populationButton = document.querySelector('#population');
const languageButton = document.querySelector('#languages');

  let graphWrapper = document.querySelector('#stat');

populationButton.addEventListener('click', function () {

  graphWrapper.innerHTML = "";

  let getMaxPopulation = 0;
  let countryPopulationArray = [];

  countries.forEach((element) => {
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

  console.log('before sorting');
  console.log(countryPopulationArray);

  console.log('after sorting');
  console.log(countryPopulationArray);
  console.log(getMaxPopulation);

  graphWrapper.innerHTML = `World : ${getMaxPopulation}<br/>`;

  for (let i = 0; i < 10; i++) {
    graphWrapper.innerHTML += `${countryPopulationArray[i].name} : ${countryPopulationArray[i].population}<br/>`;
  }
});

languageButton.addEventListener('click', function () {
  
  graphWrapper.innerHTML = "";

  let languageCount = {};

  countries.forEach((country) => {
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

  console.log(languageUsageCounts);

  for (let i = 0; i < 10; i++) {
    graphWrapper.innerHTML += `${languageUsageCounts[i].language} : ${languageUsageCounts[i].count}<br/>`;
  }
});
