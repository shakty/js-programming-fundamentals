// Whenever there is an update on any tab in the browser
// this function is called.
chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  
  // We loaded a new tab.
  if (changeInfo.status == 'complete' && tab.active) {

    // See data if you are curious.
    // console.log(tabId);
    // console.log(tab);

    // If we are on Facebook let's do something.
    if (tab.url.indexOf('facebook') !== -1) {

      setTimeout(function() {
        chrome.scripting.executeScript({
          target: {tabId: tabId, allFrames: true },
          files: [ 'content-script.js' ]
        });
        
      }, 1000); 

    }
    
  }
})