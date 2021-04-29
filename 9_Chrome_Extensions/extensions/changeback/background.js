// Default initial color.
let color = '#3aa757';

// Chrome API: runtime.
//
// The runtime API retrieves the background page, return details
// about the manifest, and listen for and respond to events in
// the app or extension lifecycle.
//
// https://developer.chrome.com/docs/extensions/reference/runtime/
chrome.runtime.onInstalled.addListener(() => {
  chrome.storage.sync.set({ color });
  console.log('Default background color set to %cgreen', `color: ${color}`);
});