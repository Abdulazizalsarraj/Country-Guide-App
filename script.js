/** @format */

let searchBtn = document.getElementById("search-btn");

let countryInput = document.getElementById("country-input");

let result = document.getElementById("result");
searchBtn.addEventListener("click", () => {
  // let countryName = countryInput.value;
  let countryName = countryInput.value;

  let URL = `https://restcountries.com/v3.1/name/${countryName}?fullText=true`;
  console.log(URL);
  fetch(URL)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(data[0].capital);
      console.log(data[0].flags.svg);
      console.log(data[0].name.common);
      console.log(data[0].continents);
      console.log(Object.keys(data[0].currencies));
      console.log(data[0].currencies[Object.keys(data[0].currencies)].name);
      console.log(
        Object.values(data[0].languages).toString().split(",").join(", ")
      );
      result.innerHTML = `
      <img src="${data[0].flags.svg}" class="flag-img"> 
      <h2>${data[0].name.common}</h2>
      <div class="wrapper">
      <div class="data-wrapper">
      <h4>Capital:</h4>
      <span>${data[0].capital} </span>
      </div>
      </div>
      <div class="wrapper">
      <div class="data-wrapper">
      <h4>Continent:</h4>
      <span>${data[0].continents} </span>
      </div>
      </div>
      <div class="wrapper">
      <div class="data-wrapper">
      <h4>Population:</h4>
      <span>${data[0].population} </span>
      </div>
      </div>
      <div class="wrapper">
      <div class="data-wrapper">
      <h4>Currency:</h4>
      <span>${
        data[0].currencies[Object.keys(data[0].currencies)].name
      } - ${Object.keys(data[0].currencies)} </span>
      </div>
      </div>
      <div class="wrapper">
      <div class="data-wrapper">
      <h4>Common Languages:</h4>
      <span>${Object.values(data[0].languages)
        .toString()
        .split(",")
        .join(", ")} </span>
      </div>
      </div>
      `;
    })
    .catch(() => {
      if (countryName.length == 0) {
        result.innerHTML = `<h3>The input field cannot be empty!</h3>`;
      } else {
        result.innerHTML = `<h3>Please Enter a Valid Country name.</h3>`;
      }
    });
});
