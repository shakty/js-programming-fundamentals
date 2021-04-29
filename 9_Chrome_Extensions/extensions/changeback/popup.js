// Initialize button with user's preferred color
let changeColor = document.getElementById("changeColor");

// Chrome API: storage.
//
// The Chrome storage extends standard local storage.
// Local Storage:
// https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage
// Chrome Storage:
// https://developer.chrome.com/docs/extensions/reference/storage/
chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});

// When the button is clicked, inject setPageBackgroundColor
// into current page.
changeColor.addEventListener("click", async () => {

  // Chrome API: tabs.
  //
  // The tabs API creates, modifies, and rearranges tabs in the browser.
  // https://developer.chrome.com/docs/extensions/reference/tabs/
  let [tab] = await chrome.tabs.query({
    active: true,
    currentWindow: true,
  });

  debugger
  
  console.log('AAAAA');

  
  console.log(tab);


  console.log('AAAAA', tab.url);


  // Chrome API: scripting.
  //
  // The scripting API executes scripts in different contexts.
  // https://developer.chrome.com/docs/extensions/reference/scripting/
  chrome.scripting.executeScript({
    target: { tabId: tab.id },
    function: setPageBackgroundColor,
  });
});

// The body of this function will be executed as a content
// script inside the current page.
function setPageBackgroundColor() {
  chrome.storage.sync.get("color", ({ color }) => {
    document.body.style.backgroundColor = color;
  });
}
