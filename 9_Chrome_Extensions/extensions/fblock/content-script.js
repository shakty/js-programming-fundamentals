alert("You are on Facebook! Do not panic, we got you covered.");

// How Facebook writes "Sponsored". Why?
const SPONSORED = "S\nt\nS\nS\np\ns\no\np\no\nn\nh\ns\no\nf\nt\nt\nn\nr\nS\nso\nr\nf\nr\ne\ng\nd\ned\nr";

const SPONSORED2 = "S\nr\npo\nt\nh\nl\ng\nu\nn\nS\nS\np\no\no\nn\nu\ns\no\na\nn\nr\ne\ns\nm\nored\nd"

let lastSpanFound = 0;

let hiddenPosts = [];

// We do the search for unwanted posts every 5 seconds, not great.
let interval = setInterval(doSearch, 5000);

function doSearch() {

    // It's very difficult to locate via attributes 
    // the sponsored posts, so we look into all <SPAN> tags. 
    let spans = document.getElementsByTagName('span');
    
    console.log('<SPAN>s found', spans.length);
    // Facebook keeps add new spans as we scroll down, 
    // no need to re-search the same one over and over,
    // so we start from the last examined. 
    for (let i = lastSpanFound; i < spans.length ; i++) {
        
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
    lastSpanFound = spans.length;
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

function hidePost (el) {
        
    // We go up the DOM, from child to parent and
    // hide the whole post (8 parents above is enough).
    const LIMIT = 9; 
    let counter = 0;
    let curElement = el;
    while (counter < LIMIT) {
        let parent = curElement.parentNode;
        if (!parent) break;
        parent.style.display = 'none';
        parent.innerHTML = '';
        curElement = parent;
        counter++;
    }
    if (parent) {
        parent.style.display = 'none';
        return true;
    }
    return false;
}