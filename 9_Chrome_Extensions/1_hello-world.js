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


// Exercise 1: Hello World Extension.
/////////////////////////////////////

// Let's do our first baby steps. It is hard to learn new things, 
// so let's make an extension that encourages to do our best.

// This simple extension will simply open a popup and display an
// encouraging message if you click on the icon on the toolbar.

// Checkout extentions/hello-world.

// You will learn about:

// 1. The basic structure of the manifest file.

// 2. How to create a popup file.

// a. Add a keyboard shorcut with the commands API:
// https://developer.chrome.com/docs/extensions/reference/commands/


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

// b. Add a background script.
// Add to the manifest the background script "background.js".

// backround": {
//     "service_worker": "background.js"
// } 

// Oooops. There is a typo of the snippet above. "backround" is
// missing a "g". It is an easy fix, but could you visualize the
// error message on the Chrome extensions page? 

// TODO: check it is not working.
// Checkpoint.
// What is this background script doing?
// How can you visualize its output?

// Exercise 2: Hello World Extension.
/////////////////////////////////////