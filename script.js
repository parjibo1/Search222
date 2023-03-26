// https://fakestoreapi.com/products

/*
X Fetch API Products
X Display
X Search Functionality - (X on submit and X while searching)
X Categories
*/

const container = document.querySelector(".container");
const URL = "https://fakestoreapi.com/products";
let arr = [];

const inputValue = document.getElementById("inputValue");
const btn = document.getElementById("btn");
const mensclothing_btn = document.getElementById("mensclothing");
const electronics_btn = document.getElementById("electronics");

// FETCHDATA
const fetchData = (URL) => {
  if (arr.length === 0) {
    container.innerHTML = "Loading...";
  }
  fetch(URL)
    .then((response) => response.json())
    .then((data) => displayData(data));
};
fetchData(URL);

// DISPLAYDATA
const displayData = (data) => {
  arr.push(data);
  container.innerHTML = "";

  if (data.length === 0) {
    container.innerHTML = "No item :(";
  }

  data.forEach((each) => {
    let box = document.createElement("div");
    box.classList.add("box");
    box.innerHTML = `
    <img src=${each.image} alt="">
    <p id="title">${each.title.substring(0, 60) + "..."}</p>
    `;
    container.appendChild(box);
  });
};

// FILTER FN
const filterData = (data) => {
  let finalArr = arr[0].filter((each) => {
    return each.title.toLowerCase().includes(data);
  });
  displayData(finalArr);
};

// FILTER OR SEARCH
btn.addEventListener("click", () => {
  filterData(inputValue.value);
});

// MENS CLOTHING CATEGORIES
const filterDataMensClothing = (categoryValue) => {
  let finalArr = arr[0].filter((each) => {
    return each.category.toLowerCase().includes(categoryValue);
  });
  displayData(finalArr);
};

mensclothing_btn.addEventListener("click", () => {
  filterDataMensClothing(`men's clothing`);
});

// ELECTRONICS CATEGORIES
const filterDataElectronics = (categoryValue) => {
  let finalArr = arr[0].filter((each) => {
    return each.category.toLowerCase().includes(categoryValue);
  });
  displayData(finalArr);
};

electronics_btn.addEventListener("click", () => {
  filterDataElectronics(`electronics`);
});

// YOU CAN REFACTOR CODE AS PER NEED :) TYYYY