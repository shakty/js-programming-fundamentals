// Tabs.
let currentTab = null;
function displayTab(tabId) {
    // We need to change the class name of both the tab
    // and its navigation link. 
    if (currentTab) {
        let linkId = currentTab.id.replace("tab", "power");
        document.getElementById(linkId).className = 'nav-link h3';
        currentTab.className = 'tab';
    }
    let linkId = tabId.replace("tab", "power");
    document.getElementById(linkId).className = 'nav-link h3 active';
    currentTab = document.getElementById(tabId);
    currentTab.className = 'tab tab-active';
}

document.getElementById('power-yes').onclick = function() {
    displayTab("tab-yes");
};
document.getElementById('power-maybe').onclick = function() {
    displayTab("tab-maybe");
};
document.getElementById('power-no').onclick = function() {
    displayTab("tab-no");
};