// Whenever there is an update on any tab in the browser
// this function is called.
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {

  // We loaded a new tab.
  if (changeInfo.status == 'complete' && tab.active) {

    // Look into the tab data if you are curious.
    // console.log(tabId);
    // console.log(tab);

    // If the url contains "facebook", let's do something.
    if (tab.url.indexOf('facebook') !== -1) {

      // Somehow, a delay is needed to prevent alert messages
      // to be removed too quickly. 
      setTimeout(function() {

        // We cannot write JS code directly here, we need to
        // inject it into the page with the scripting API.
        // https://developer.chrome.com/docs/extensions/reference/scripting/
        chrome.scripting.executeScript({
          target: { tabId: tabId, allFrames: true },
          files: [ 'content-script.js' ]
        });

      }, 1000); 

    }
    
  }
});

// Listen to message from the content script.

// Message passing ref:
// https://developer.chrome.com/docs/extensions/mv3/messaging/

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {

    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");

    if (request.hidden) {
      // setBadgeText requires a string, so we do the conversion.
      chrome.action.setBadgeText({ text: '' + request.hidden });
    }
  }
);