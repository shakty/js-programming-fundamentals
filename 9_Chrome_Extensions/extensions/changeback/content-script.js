alert('Again on Fb!');


let SPONSORED = "S\nt\nS\nS\np\ns\no\np\no\nn\nh\ns\no\nf\nt\nt\nn\nr\nS\nso\nr\nf\nr\ne\ng\nd\ned\nr";

setInterval(doSearch, 5000);

function doSearch() {
    let classes = "b6zbclly myohyog2 l9j0dhe7 aenfhxwr l94mrbxd ihxqhq3m nc684nl6 t5a262vz sdhka5h4"; 
    let sponsored = document.getElementsByClassName(classes);
    let spans = document.getElementsByTagName('span');
    

    console.log('HERE!!', spans.length);

    for (let i = 0; i < spans.length ; i++) {
        // console.log()
        // console.log()
        // console.log(spans[i].innerText);
        // console.log()
        // console.log()
        if (spans[i].innerText === SPONSORED) {
            spans[i].innerHTML = 'AAAAAAAAAAAA! ' + i;
            findPageLet(spans[i]);
            // spans[i].click();
        }
    }

    // let links = document.getElementsByTagName('a');
    // console.log('HERE!!', links.length);


    // for (let i = 0; i < links.length ; i++) {
    //     // console.log(links[i].innerHTML);
    //     if (links[i].href.indexOf('utm_campaign') !== -1 ||
    //         links[i].href.indexOf('fbclid') !== -1
    //        ) {
    //         links[i].style.display = 'none';
    //         console.log('Found: ', i);
    //         debugger
    //         let counter = 0;
    //         let found = false;
    //         let failsafe = 100;
    //         let curElement = links[i];
    //         while (counter < failsafe && !found) {
    //             let parent = curElement.parentNode;
    //             if (!parent) break;
    //             if (parent.dataset && parent.dataset.pageLet) {
    //                 parent.style.display = "none";
    //                 found = true;
    //             }
    //             else {
    //                 curElement = parent;
    //                 counter++;
    //             }
    //         }
    //         if (found) console.log('YEAH!!!');
    //         else ('DOH!')
    //         console.log();
    //         // spans[i].click();
    //     }
    // }



    // debugger

    // for (let i = 0; i < sponsored.length ; i++) {
    //     console.log(sponsored[i].innerHTML);
    //     if (sponsored[i].innerHTML === 'Sponsored') {
    //         sponsored[i].innerHTML = 'AAAAAAAAAAAAAAAAAAAAAAAAAAAA!';
    //     }
    // }

}


function findPageLet (el) {
    let counter = 0;
    let curElement = el;
    const LIMIT = 9; // 8 parents above is enough
    while (counter < LIMIT) {
        let parent = curElement.parentNode;
        if (!parent) break;
        parent.innerHTML = '';
        curElement = parent;
        counter++;
    }
    console.log();
    // spans[i].click();
}