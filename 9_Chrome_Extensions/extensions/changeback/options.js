let div = document.getElementById("buttonDiv");

let selectedClassName = "current";

const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

// Listener for button clicks.
// Marks the selected button and saves the choice.
function handleButtonClick(event) {
  // Remove styling from the previously selected color.
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  
  // Another color selected.
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  // Retrieve the color from the element (we store it 
  // in the dataset property in the function below).
  let color = event.target.dataset.color;

  // Add the class to to the element.
  // classList is an object manipulating all classes.
  // https://www.w3schools.com/jsref/prop_element_classlist.asp
  event.target.classList.add(selectedClassName);
  
  // Chrome API: storage.
  //
  // The Chrome storage extends standard local storage.
  // Local Storage:
  // https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
  // Chrome Storage:
  // https://developer.chrome.com/docs/extensions/reference/storage/
  chrome.storage.sync.set({ color });
}

// Add a button to the page for each supplied color.
function constructOptions(buttonColors) {

  // Retrieve stored color. Notice it returns an object.
  chrome.storage.sync.get("color", (data) => {

    let currentColor = data.color;

    // For each color we were provided
    for (let buttonColor of buttonColors) {
      
      // Create a button with that color.
      let button = document.createElement("button");

      // Set the color in dataset and style.

      // The dataset property is means to add custom 
      // properties to HTML elements. In the DOM, they
      // will begin with "data-" and camelCase will be
      // converted to dashes.
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset
      button.dataset.color = buttonColor;

      button.style.backgroundColor = buttonColor;

      // Mark the currently selected color.
      if (buttonColor === currentColor) {
        button.classList.add(selectedClassName);
      }

      // Register a listener for when that button is clicked.
      button.addEventListener("click", handleButtonClick);
      div.appendChild(button);
    }
  });
}

// Initialize the page by constructing the color options.
constructOptions(presetButtonColors);
