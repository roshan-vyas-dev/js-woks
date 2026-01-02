var countries = [
  { code: "IND", name: "India", alpha2cod: "IN", population: 1420000000, language: ["Hindi", "English"], currency: "INR", borders: ["PAK", "CHN", "NPL", "BTN", "BGD", "MMR"] },
  { code: "USA", name: "United States", alpha2cod: "US", population: 331000000, language: ["English"], currency: "USD", borders: ["CAN", "MEX"] },
  { code: "CAN", name: "Canada", alpha2cod: "CA", population: 38000000, language: ["English", "French"], currency: "CAD", borders: ["USA"] },
  { code: "MEX", name: "Mexico", alpha2cod: "MX", population: 128000000, language: ["Spanish"], currency: "MXN", borders: ["USA", "GTM", "BLZ"] },
  { code: "BRA", name: "Brazil", alpha2cod: "BR", population: 213000000, language: ["Portuguese"], currency: "BRL", borders: ["ARG", "BOL", "PER", "COL"] },
  { code: "ARG", name: "Argentina", alpha2cod: "AR", population: 45000000, language: ["Spanish"], currency: "ARS", borders: ["BRA", "CHL", "URY"] },
  { code: "CHN", name: "China", alpha2cod: "CN", population: 1410000000, language: ["Mandarin"], currency: "CNY", borders: ["IND", "RUS", "MNG", "NPL"] },
  { code: "JPN", name: "Japan", alpha2cod: "JP", population: 125000000, language: ["Japanese"], currency: "JPY", borders: [] },
  { code: "KOR", name: "South Korea", alpha2cod: "KR", population: 52000000, language: ["Korean"], currency: "KRW", borders: ["PRK"] },
  { code: "PRK", name: "North Korea", alpha2cod: "KP", population: 26000000, language: ["Korean"], currency: "KPW", borders: ["KOR", "CHN"] },
  { code: "GBR", name: "United Kingdom", alpha2cod: "GB", population: 67000000, language: ["English"], currency: "GBP", borders: ["IRL"] },
  { code: "FRA", name: "France", alpha2cod: "FR", population: 65000000, language: ["French"], currency: "EUR", borders: ["ESP", "DEU", "ITA"] },
  { code: "DEU", name: "Germany", alpha2cod: "DE", population: 83000000, language: ["German"], currency: "EUR", borders: ["FRA", "POL", "CHE"] },
  { code: "ITA", name: "Italy", alpha2cod: "IT", population: 60000000, language: ["Italian"], currency: "EUR", borders: ["FRA", "CHE", "AUT"] },
  { code: "ESP", name: "Spain", alpha2cod: "ES", population: 47000000, language: ["Spanish"], currency: "EUR", borders: ["FRA", "PRT"] },
  { code: "RUS", name: "Russia", alpha2cod: "RU", population: 145000000, language: ["Russian"], currency: "RUB", borders: ["CHN", "MNG", "UKR"] },
  { code: "UKR", name: "Ukraine", alpha2cod: "UA", population: 44000000, language: ["Ukrainian"], currency: "UAH", borders: ["RUS", "POL"] },
  { code: "POL", name: "Poland", alpha2cod: "PL", population: 38000000, language: ["Polish"], currency: "PLN", borders: ["DEU", "UKR"] },
  { code: "CHE", name: "Switzerland", alpha2cod: "CH", population: 8600000, language: ["German", "French", "Italian"], currency: "CHF", borders: ["DEU", "FRA", "ITA"] },
  { code: "AUT", name: "Austria", alpha2cod: "AT", population: 9000000, language: ["German"], currency: "EUR", borders: ["DEU", "ITA"] },
  { code: "AUS", name: "Australia", alpha2cod: "AU", population: 26000000, language: ["English"], currency: "AUD", borders: [] },
  { code: "NZL", name: "New Zealand", alpha2cod: "NZ", population: 5000000, language: ["English", "Maori"], currency: "NZD", borders: [] },
  { code: "ZAF", name: "South Africa", alpha2cod: "ZA", population: 60000000, language: ["English", "Zulu"], currency: "ZAR", borders: ["NAM", "BWA"] },
  { code: "NGA", name: "Nigeria", alpha2cod: "NG", population: 220000000, language: ["English"], currency: "NGN", borders: ["NER", "BEN"] },
  { code: "EGY", name: "Egypt", alpha2cod: "EG", population: 110000000, language: ["Arabic"], currency: "EGP", borders: ["ISR", "SDN"] },
  { code: "SAU", name: "Saudi Arabia", alpha2cod: "SA", population: 36000000, language: ["Arabic"], currency: "SAR", borders: ["JOR", "IRQ"] },
  { code: "ARE", name: "United Arab Emirates", alpha2cod: "AE", population: 10000000, language: ["Arabic"], currency: "AED", borders: ["SAU", "OMN"] },
  { code: "QAT", name: "Qatar", alpha2cod: "QA", population: 2900000, language: ["Arabic"], currency: "QAR", borders: ["SAU"] },
  { code: "IRN", name: "Iran", alpha2cod: "IR", population: 86000000, language: ["Persian"], currency: "IRR", borders: ["IRQ", "AFG"] },
  { code: "IRQ", name: "Iraq", alpha2cod: "IQ", population: 42000000, language: ["Arabic", "Kurdish"], currency: "IQD", borders: ["IRN", "SAU"] },
  { code: "PAK", name: "Pakistan", alpha2cod: "PK", population: 240000000, language: ["Urdu", "English"], currency: "PKR", borders: ["IND", "AFG"] },
  { code: "AFG", name: "Afghanistan", alpha2cod: "AF", population: 41000000, language: ["Pashto", "Dari"], currency: "AFN", borders: ["PAK", "IRN"] },
  { code: "BGD", name: "Bangladesh", alpha2cod: "BD", population: 170000000, language: ["Bengali"], currency: "BDT", borders: ["IND", "MMR"] },
  { code: "NPL", name: "Nepal", alpha2cod: "NP", population: 30000000, language: ["Nepali"], currency: "NPR", borders: ["IND", "CHN"] },
  { code: "LKA", name: "Sri Lanka", alpha2cod: "LK", population: 22000000, language: ["Sinhala", "Tamil"], currency: "LKR", borders: ["IND"] },
  { code: "THA", name: "Thailand", alpha2cod: "TH", population: 70000000, language: ["Thai"], currency: "THB", borders: ["MMR", "KHM"] },
  { code: "MMR", name: "Myanmar", alpha2cod: "MM", population: 55000000, language: ["Burmese"], currency: "MMK", borders: ["IND", "THA"] },
  { code: "VNM", name: "Vietnam", alpha2cod: "VN", population: 98000000, language: ["Vietnamese"], currency: "VND", borders: ["CHN", "LAO"] },
  { code: "SGP", name: "Singapore", alpha2cod: "SG", population: 5600000, language: ["English", "Malay", "Tamil"], currency: "SGD", borders: [] },
  { code: "MYS", name: "Malaysia", alpha2cod: "MY", population: 33000000, language: ["Malay"], currency: "MYR", borders: ["THA", "IDN"] },
  { code: "IDN", name: "Indonesia", alpha2cod: "ID", population: 275000000, language: ["Indonesian"], currency: "IDR", borders: ["MYS"] },
  { code: "PHL", name: "Philippines", alpha2cod: "PH", population: 115000000, language: ["Filipino", "English"], currency: "PHP", borders: [] }
];




var isExist = countries.some(c => c.name == "India");
// console.log(isExist);

// is there any country with more than 2 languages

var isTwoMoreLang = countries.some(c => c.language.length > 2);
// console.log(isTwoMoreLang);

// is there any country with more than 3 border

let isMoreThan3 = countries.some(c => c.borders.length > 3);
// console.log(isMoreThan3);

// to get only one object use method=  find();

let indiaDetails = countries.find(c => c.name == "India");
// console.log(indiaDetails);


// find country with alpha2 code IQ

var alpha2code = countries.find(c => c.alpha2cod == "IQ");
// console.log(alpha2code);

// find country with currency cny

var currencyCny = countries.find(c => c.currency.toLowerCase() == "cny");
// console.log(currencyCny);


// foreach ()

// var countriesName=countries.forEach(c=>console.log(c.name));


// display countries with borders >2

// countries.filter(c=>c.borders.length>2).forEach(c=>console.log(c.name));


//q  list names of country with currency as eur

// countries.filter(c=>c.currency.toLowerCase()=="eur").forEach(c=>console.log(c.name));


// ------------------------------------------------------------------------------------
//1 total population

let totalPopulation = countries.reduce((sum, p) => sum + p.population, 0);
// console.log("Total population is: ",totalPopulation);


// 2 Filter and list countries that have the same currency

var sameCurrency = {};

for (let c of countries) {
  let currency = c.currency;
  let countryName = c.name
  if (currency in sameCurrency) {
    sameCurrency[currency].push(countryName)

  }
  else {
    sameCurrency[currency] = [countryName]
  }
}
// console.log(sameCurrency);

// 3. Sort all countries in alphabetical order (by country name)
let alphabetical = countries.sort((c1, c2) => c1.name.localeCompare(c2.name)).map(n => n.name)
// console.log(alphabetical);



// 4. Count how many countries use each language.
let languageCount = {};

for (let c of countries) {
  for (let lang of c.language) {
    if (lang in languageCount) {
      languageCount[lang]++;
    } else {
      languageCount[lang] = 1;
    }
  }
}

// console.log(languageCount);

// 5. Find the country with the highest population.
let highestPopulation = countries.reduce((p1, p2) => p1.population > p2.population ? p1 : p2);
// console.log("country :",highestPopulation.name,
//   "population:",highestPopulation.population
// );


// 6. Categorize (group) countries based on language.
let languageCategories = {};

for (let c of countries) {
  for (let lang of c.language) {
    if (lang in languageCategories) {
      languageCategories[lang].push(c.name);

    }
    else {
      languageCategories[lang] = [c.name]
    }
  }
}
// console.log(languageCategories);

// 7. List countries that have more than one language.
let mtOneLanguage=countries.filter(c=>c.language.length>1).map(n=>n.name);
// console.log(mtOneLanguage);

// 8. Find the average population of all countries.
let sums=countries.reduce((sum,p)=>sum+p.population,0);

let averagePopulation=sums/countries.length;
// console.log(averagePopulation);

// 9. List all countries that use "EUR" as their currency.
let eurCurrency=countries.filter(c=>c.currency.toLowerCase()=="eur").map(c=>c.name);
// console.log(eurCurrency);


// 10. Find the country with the highest number of border-sharing countries.
let borderShareHighes=countries.reduce((b1,b2)=>b1.borders.length>b2.borders.length?b1:b2).name;
console.log(borderShareHighes);




// 11. Find the country with the lowest population.
let lowestPopulation=countries.reduce((c1,c2)=>c1.population>c2.population?c2:c1).name;
// console.log(lowestPopulation);

// 12. List all countries that have no border-sharing countries.
let noBorder=countries.filter(c=>c.borders=="").map(c=>c.name);
// console.log(noBorder);

// 13. Sort the countries by population in ascending order.
let populationAsce=countries.sort((p1,p2)=>p1.population-p2.population).map(n=>n.name);
// console.log(populationAsce);
