// This is not a normal JS file, rather a special JS Web worker.
// It does not have immediate access the content of a page, but it 
// has access to the chrome API.

// Some chrome API require special permissions, but not the commands API,
// so we just use it here to write the name of the command that was 
// just invoked.

// https://developer.chrome.com/docs/extensions/reference/commands/

console.log('I am alive in the background!');

chrome.commands.onCommand.addListener(function(command) {
  console.log('Command:', command);
});

// Extension event listeners are a little different from the patterns
// you may have seen in DOM or Node.js APIs. Precisely, we use the:

// chrome.runtime API.

// and we add a new listener to the event 'onInstalled'.

// Chrome API: runtime.
//
// The runtime API retrieves the background page, return details
// about the manifest, and listen for and respond to events in
// the app or extension lifecycle.

// Ref:
// https://developer.chrome.com/docs/extensions/reference/events/

// Notice that we add the async keyword because we use wait in it.
chrome.runtime.onInstalled.addListener(async () => {

  // Let's open a new tab programmatically.
  
  // Note: why not just `let url = "hello.html"`?
  // The method `runtime.getURL` is a bit more robust as it returns 
  // a full URL rather than just a relative path that Chrome needs
  // to resolve contextually at runtime.
  let url = chrome.runtime.getURL("hello.html");

  // Creating a tab is an async task and it returns a promise.
  // Tabs ref:
  // https://developer.chrome.com/docs/extensions/reference/tabs/
  let tab = await chrome.tabs.create({ url });

  // After the new tab is created, let's log the tab id.
  console.log(`Created tab ${tab.id}`);
});
