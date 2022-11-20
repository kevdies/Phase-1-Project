fetch("https://api.openbrewerydb.org/breweries")
  .then((res) => res.json())
  .then((data) => renderData(data));

function renderData(data) {
  data.forEach((brewery) => {
    renderSingularBrewery(brewery);
  });
}

//rendering brewery-list div that is a dropdown
const breweryList = document.querySelector("#brewery-list");

function renderSingularBrewery(brewery) {
  const breweryList = document.querySelector("#brewery-list");
  const listPTag = document.createElement("p");
  const listPTagH3 = document.createElement("h3");
  listPTag.append(listPTagH3);
  breweryList.append(listPTag);

  const imageForm = document.createElement("form");
  const imageInput = document.createElement("input");
  imageInput.type = "text";
  imageInput.className = "image-field";
  imageInput.name = "image"; //changed


  const inputSubmit = document.createElement("input");
  inputSubmit.type = "submit";
  inputSubmit.value = "S U B M I T";
  inputSubmit.placeholder = "insert image link here";
  inputSubmit.className = "addingimage";
  imageForm.append(inputSubmit, imageInput);

  listPTag.append(imageForm);
  listPTagH3.textContent = "Brewery: " + brewery.name;
  listPTag.className = "allbreweries";
  listPTag.append(imageForm);

  //mouseover on the individual breweries names in dropdown div
  inputSubmit.addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.style.color = "orange";
      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.color = "";
      }, 500);
    },
    false
  );

  const detailedInfo = document.querySelector("#detailed-info")
  // submit for for image
  imageForm.addEventListener("submit", (e) => {
    e.preventDefault();
    // const detailImage = document.querySelector("#detail-image");
    // detailImage.src = e.target[1].value;
    console.log(detailedInfo.firstChild)//first child is the span
    const newImage = document.createElement("img");
    newImage.src = e.target[1].value;

    detailedInfo.firstChild.append(newImage);
  });

  //displays div with all breweries
  const dropDownButton = document.querySelector("#dropdown");
  dropDownButton.addEventListener("click", () => {
    showBreweryList();
  });

  //displays div with all the details for each brewery
  const infoButton = document.createElement("button");
  infoButton.className = "info";
  infoButton.textContent = "D E T A I L S";
  listPTag.append(infoButton);

  infoButton.addEventListener("click", () => {
    showFullDetails(brewery);
    /**figure out how to not display the keys that don't have values for certain objs */
  });
}

//shows the .hidden div that has all the brewery names
function showBreweryList() {
  breweryList.style.display = "none" ? "block" : "none"
  //want this to hide after a click when
}

/*rendering 3rd div detailedInfo div that displays when full details button is clicked*/

function showFullDetails(brewery) {
  const detailedInfo = document.querySelector("#detailed-info");
  detailedInfo.innerHTML = "";
  //^^this resets the detailedInfo div between clicks on full details
  // for (const key in brewery) {
  //   if (key === !null || key === !undefined) {
      const fullDetailsSpan = document.createElement("span");
      const fullDetailsParTags = document.createElement("p");
      const listTagStreet = document.createElement("p");
      const listTagCity = document.createElement("p");
      const listTagState = document.createElement("p");
      const listTagZip = document.createElement("p");
      const listTagPhone = document.createElement("p");
      const listTagWebsite = document.createElement("p");

      fullDetailsParTags.textContent = "🍺   Name: " + brewery.name;
      listTagStreet.textContent = "🍺   Street " + brewery.street;
      listTagCity.textContent = "🍺   City: " + brewery.city;
      listTagState.textContent = "🍺   State: " + brewery.state;
      listTagZip.textContent = "🍺   Zip: " + brewery.postal_code;
      listTagPhone.textContent = "🍺   Phone: " + brewery.phone;
      listTagWebsite.textContent = "🍺   Website: " + brewery.website_url;

      detailedInfo.append(fullDetailsSpan);
      fullDetailsSpan.append(
        fullDetailsParTags,
        listTagStreet,
        listTagCity,
        listTagState,
        listTagZip,
        listTagPhone,
        listTagWebsite
      );
  //   }
  // }
}

function handleAddComment() {
  const commentsSection = document.querySelector("#comments-section");
  const commentForm = document.querySelector("#comment-form");
  commentForm.addEventListener("submit", (event) => {
    event.preventDefault();
    const commentInput = event.target["comment-input"].value;

    const newCommentTag = document.createElement("p");
    newCommentTag.textContent = commentInput;

    commentsSection.append(newCommentTag);

    event.target.reset();
  });
  document.querySelector("#comment-form > input[type=submit]:nth-child(2)").addEventListener(
    "mouseover",
    (event) => {
      // highlight the mouseover target
      event.target.style.color = "orange";
      // reset the color after a short delay
      setTimeout(() => {
        event.target.style.color = "";
      }, 800);
    },
    false
  );

}

handleAddComment();


