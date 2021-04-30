/////////////////////////////////////////////
// Programming Fundamentals in JavaScript! //
/////////////////////////////////////////////

// Module: Chrome Extension.
////////////////////////////

// Chrome extensions---who might guess it?---extend_ the 
// functionalities of the Chrome browser.

// https://developer.chrome.com/docs/extensions/

// Every modern browser is somewhat extendible and the language to
// extend it is generally JavaScript-based, however with some differences.
// We will focus only on Chrome extensions. 


// Exercise 1: Change Background Extension.
///////////////////////////////////////////

// Checkout extentions/changeback.

// You will learn about:

// 1. Create an options page.

// 2. Interact with storage API.

// 3. Modify the content of a page.


// a. Add an icon for the extension.
////////////////////////////////////

// You may reuse the default_icon for the action, or pick an imaage
// of your choice. See ref:
// https://developer.chrome.com/docs/extensions/mv3/manifest/icons/

// Hint: it is enough to specify the "128" property.

// b. Add a keyboard shorcut with the commands API.
///////////////////////////////////////////////////

// Firt, let's modify the manifest.

// Remove the comments from the snippet below and add it inside the manifest.

//   "commands": {
//     "_execute_action": {
//       "suggested_key": {
//         "default": "Ctrl+Shift+X",
//         "mac": "MacCtrl+Shift+X"
//       },
//       "description": "Opens hello.html"
//     }
//   }

// Hint: Notice that the property is named "suggested_key". If another 
// shorcut exists with the same key it might not be executed. If so, 
// Try another key combination. 


// c. Add a background script.
//////////////////////////////

// Background scripts run in the background. Actually that is not true.
// They lurk in the background waiting for some event to trigger their
// actions. 

// Add to the manifest the background script "background.js".

// backround": {
//     "service_worker": "background.js"
// } 

// Oooops. There is a typo of the snippet above. "backround" is
// missing a "g". It is an easy fix, but could you visualize the
// error message on the Chrome extensions page? 

// TODO: check it is not working.

// Checkpoint.
// 1 - What is this background script doing?

// Here is the ref: 
// https://developer.chrome.com/docs/extensions/reference/commands/


// 2 - How can you visualize its output?
