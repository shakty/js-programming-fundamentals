let div = document.getElementById("buttonDiv");

let selectedClassName = "current";

const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

// Listener for button clicks.
// Marks the selected button and saves the choice.
function handleButtonClick(event) {

  // The element that was clicked is in the target 
  // property of the event.
  let btn = event.target;

  // Remove styling from the previously selected color.
  // Note: we could run querySelector on the whole document,
  // however it is more efficient to run it on localized portion
  // of it: the parent element of all the buttons.
  let current = btn.parentElement.querySelector(`.${selectedClassName}`);
  
  // Another color selected.
  if (current && current !== btn) {
  // classList is a special object to manipulating CSS classes.
  // https://www.w3schools.com/jsref/prop_element_classlist.asp
    current.classList.remove(selectedClassName);
  }

  // Retrieve the color from the element's dataset 
  // property (more on this special property below).
  let color = btn.dataset.color;

  // Add the class to to the element.
  btn.classList.add(selectedClassName);
  
  // Chrome API: storage.
  //
  // The Chrome storage extends standard local storage. The main 
  // advantage is its ability to store any data format, not just strings. 
  //
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

      // The dataset property maps properties to attributes in
      // HTML elements. In the DOM, attributes begin with
      // "data-" and camelCase is converted to dashes.
      // https://developer.mozilla.org/en-US/docs/Web/API/HTMLOrForeignElement/dataset
      button.dataset.color = buttonColor;

      button.style.backgroundColor = buttonColor;

      // Add a class to the button to mark that is currently selected.
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
