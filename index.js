// console.log("hello world!");
fetch("https://api.openbrewerydb.org/breweries")
  .then((res) => res.json())
  .then((data) => renderData(data));

function renderData(data) {
  data.filter((brewery) => {
    console.log(brewery)
    const breweryList = document.querySelector('#brewery-list');
    const breweryUl = document.createElement("ul");
    const listItems = document.createElement("li");
    breweryList.appendChild(breweryUl);
    breweryUl.appendChild(listItems);
    listItems.textContent = brewery.name;

  });
}

function buildMyList(data) {
  const myList = document.querySelector('#my-list');
  const myUl = document.createElement("ul");
  const listItems = document.createElement("li");
  myList.appendChild(myUl);
  myUl.appendChild(listItems);
  listItems.textContent = "My Breweries";

}