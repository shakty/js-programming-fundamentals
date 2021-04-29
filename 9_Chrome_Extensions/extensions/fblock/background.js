// const tabId = getTabId();

// async function getCurrentTab() {
//   let queryOptions = { active: true, currentWindow: true };
//   let [tab] = await chrome.tabs.query(queryOptions);
//   return tab;
// }

// chrome.tabs.query({active: true, lastFocusedWindow: true}, tabs => {
//   let url = tabs[0].url;
//   // use `url` here inside the callback because it's asynchronous!
// });

chrome.tabs.onUpdated.addListener( function (tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.active) {

    // do your things
    console.log(tabId);
    console.log(tab);
    debugger

  }
})

setInterval(function() {
  console.log('AH!');
  debugger;
}, 3000);

// let checkResults = (injectionResults) => {
//   for (const frameResult of injectionResults)
//     console.log('Frame Title: ' + frameResult.result);
// }

// chrome.scripting.executeScript(
//     {
//       target: { tabId: tabId, allFrames: true },
//       files: [ 'script.js' ],
//     },
//     checkResults);

  
// const css = 'body { background-color = "red"; }';
// chrome.scripting.insertCSS(
//   {
//     target: { tabId: tabId },
//     css: css,
//   },
//   checkResults);