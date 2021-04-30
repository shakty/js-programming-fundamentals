alert("You are on Facebook! Do not panic, we got you covered.");

// How Facebook writes "Sponsored". Why?
const SPONSORED = "S\nt\nS\nS\np\ns\no\np\no\nn\nh\ns\no\nf\nt\nt\nn\nr\nS\nso\nr\nf\nr\ne\ng\nd\ned\nr";

const SPONSORED2 = "S\nr\npo\nt\nh\nl\ng\nu\nn\nS\nS\np\no\no\nn\nu\ns\no\na\nn\nr\ne\ns\nm\nored\nd"

let lastFound = 0;

let hiddenPosts = [];

// We do the search for unwanted posts every 5 seconds, not great.
let interval = setInterval(doSearchByNumChildren, 5000);

// Message passing ref:
// https://developer.chrome.com/docs/extensions/mv3/messaging/
function updateBadge(n) {
    chrome.runtime.sendMessage({ hidden: n });
}

function doSearch() {

    // It's very difficult to locate via attributes 
    // the sponsored posts, so we look into all <SPAN> tags. 
    let spans = document.getElementsByTagName('span');
    
    console.log('<SPAN>s found', spans.length);
    // Facebook keeps add new spans as we scroll down, 
    // no need to re-search the same one over and over,
    // so we start from the last examined. 
    for (let i = lastFound; i < spans.length ; i++) {
        
        // If you are curious to look into all texts.
        // console.log()
        // console.log()
        // console.log(spans[i].innerText);
        // console.log()
        // console.log()
        
        if (spans[i].innerText === SPONSORED ||
            spans[i].innerText === SPONSORED2) {
            let res = hidePost(spans[i]);
            // If post was hidden, add a reference to the hidden posts.
            if (res) hiddenPosts.push(i);
        }
    }

    // Keep reference to the last span found.
    lastFound = spans.length;

    updateBadge(lastFound);
}

function doSearchByNumChildren() {

    // It's very difficult to locate via attributes 
    // the sponsored posts, so we look into all <SPAN> tags. 
    let spans = document.getElementsByTagName('span');
    
    console.log('<SPAN>s found', spans.length);
    // Facebook keeps add new spans as we scroll down, 
    // no need to re-search the same one over and over,
    // so we start from the last examined. 
    for (let i = lastFound; i < spans.length ; i++) {
        
        // If you are curious to look into all texts.
        // console.log()
        // console.log()
        // console.log(spans[i].innerText);
        // console.log()
        // console.log()
        
        // It is fishy to have more than 20 children in a span.
        if (spans[i].children && spans[i].children.length > 20) {
            let res = hidePost(spans[i]);
            // If post was hidden, add a reference to the hidden posts.
            if (res) hiddenPosts.push(i);
        }
    }

    // Keep reference to the last span found.
    lastFound = spans.length;

    updateBadge(lastFound);
}


function doSearchByLink() {
     // It's very difficult to locate via attributes 
    // the sponsored posts, so we look into all <SPAN> tags. 
    let links = document.getElementsByTagName('a');
    
    console.log('<A>s found', links.length);
    // Facebook keeps add new links as we scroll down, 
    // no need to re-search the same one over and over,
    // so we start from the last examined. 
    for (let i = lastFound; i < links.length ; i++) {
        
        // If you are curious to look into all texts.
        console.log()
        console.log()
        console.log(links[i].href);
        console.log()
        console.log()
        
        if (links[i].href.indexOf('/ads/') !== -1) {
            debugger
            let res = hidePost(links[i]);
            // If post was hidden, add a reference to the hidden posts.
            if (res) hiddenPosts.push(i);
        }
    }

    // Keep reference to the last span found.
    lastFound = links.length;

    
    updateBadge(lastFound);

}

// function isSponsored(el) {
//     let children = el.children;
//     let idx = 0;
//     let sponsored = 'Sponsored';
//     debugger;
//     for (let i = 0 ; i < children.length ; i++) {
//         // "position: absolute; top: 3em;"
//         if (!children[i].hasAttribute('style')) {
//             if (children[i].innerText !== sponsored.charAt(idx)) return false;
//             idx++;
//         }
//     }
// }

function hidePost (el, limit) {
        
    // We go up the DOM, from child to parent and
    // hide the whole post (8 parents above is enough).
    const LIMIT = limit || 9; 
    let counter = 0;
    let curElement = el;
    while (counter < LIMIT) {
        let parent = curElement.parentNode;
        if (!parent || !parent.display) return false;
        parent.style.display = 'none';
        parent.innerHTML = '';
        curElement = parent;
        counter++;
    }
    return true;
}