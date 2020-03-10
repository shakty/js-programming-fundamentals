////////////////////////////////////////////////////////////////////////////////
// Welcome to the 1st exercise sheet of Programming Fundamentals in JavaScript!
///////////////////////////////////////////////////////////////////////////////

// All the text that follows a double "slash", that is //, is a comment.
// Whatever follows the double slash on the same line is ignored by
// the computer, it is just for you to read.

// Empty lines are also ignore, obviously.

// Comments are perhaps the most important
// What do programmers write in these comments?
// Imagine yourself opening this file in 2 years. What would you
// like to know in the most concise way possible?

// In this file, comments contain the instructions for the exercises
//  as well as useful hints.

// Enough said. Let's begin with understanding how to move around
// in the Atom editor.

// I hope you don't get bored. If so, just continue with the exercises
// in the next file at your own pace. You will find the solutions in the
// folder called solutions. Who would expect this?

// EXERCISE 1 Indentation.
//////////////////////////

// a. Select all the code below and press TAB. Ta da!
// Did something happened? If not, please check again the slides
// to setup Atom.

let a=              1234    ;
   a++;
                if (  a > 123 ) {
a--;
        }
                                              else a++
        console.log(a);

// b. Why is it still different from the code indented on the slide?
// Automatic indentation simply adjustes the space on the left-hand
// side of your code. It neither adds missing parentheses nor trims
// white space between words. That is up to you to do it.
// Do it, does it read better? Can you grasp what it is doing?


// EXERCISE 2 Linting.
//////////////////////
// Linting can spot your code errors on the fly. As you type them.
// It can also gives you suggestions about to better format and organize
// your code. Pretty useful, isn't it?

// But why this weird name? "Linting?" lint was the name originally given
// to a particular program that flagged some suspicious and non-portable
// constructs (likely to be bugs) in C language code.

// Below is some code with some errors and warnings. Next to the line with
// an error there should be a red dot. If you hover over the line, you will
// get additional information about the error. In addition, all the
//  errors are available in a separate panel at the bottom of the page.

// Start fixing the first error, more errors might pop up, because the first
// error was blocking the execution of the code inspection.

// If you don't know how to fix an error, just comment out the line with //.
// However, for some errors you will find a link with additional
// information about how to fix inside the tooltip, and for others you can
// simply click  a "Fix" button.

// Hint: follow the pattern.
a = 1
b = 2
c .= 3

// Hint: This function has no name following the word function.
function(notUsed) {
    console.log('Hello!');
}

// EXERCISE 3. Autocompletion.
//////////////////////////////
// Atom comes with snippet auto-completion. Cool! But what is a "snippet" ?
// A snippet is simply a portion of code that you can reuse.
// We haven't learn the syntax of JavaScript, but this is just to show off
// some useful features of the editor.

// a. Auto complete for console.log, On the next line, start typing log.
// A popup window will show up with suggestion, pick the first one.

// b. Auto complete for a personl note to fix this line of code. Start typing
// fix.

// c. What are all the other suggestions? Atom collects and indexes all the
// words in the projects and suggest them to you as you type. Sometimes
// annoying, sometimes useful.

// EXERCISE 3. Shorcuts.
////////////////////////
// Proficient programmers use the mouse as little as possible, and try
// to do everything with the keyboard. It is actually possible to code
// without using the mouse at all, but we are still far from that point.
// Here we learn just a couple of useful shortcuts.

// a. Close this project. Ok, here is the catch 22, you have to do it
// with the mouse. Right click on the name "js-programming-fundamentals" and
// select "Remove Project Folder." Don't worry it won't delete it from
// the file system, just from Atom. Then reopen it using the shortcut
// Ctrl-Shift-A.

// b. Comment out useless code with Ctrl-/. Notice if you applied the
// command multiple times, it will uncomment/comment/uncomment... it.
let uselessCode = 'I am useles';

// c. Cool. What other shorcuts are available? Here is a shortcut to find
// them all. Ctrl-Shift-P. Some Look around and remember how to get here, we will
// use it later.


// EXERCISE 4. Bracket Matching.
////////////////////////////////
// JavaScript wraps blocks of codes in curly brackes: { SOME CODE }.
// A common rookie mistake is to forget to open or close a parenthesis,
// causing an error. Unfortunately, these common mistakes are surprisingly
// difficult to catch for the untrained eye and may cause acute distress
// in the joung JavaScript programmer. To prevent or mitigate this outcome,
// get familiar with the Atom built-in "Bracket Matcher" utility.

// a. Position yourself after the closing curly bracket of the following
// if statement (it is the second parenthesis). In the main menu, select
// Packages/Bracket Matcher/Go To Matching Bracket. Where did the cursor go?

if (true) {
    console.log("Hei!");
}

// b. That was easy, furthermore Atom alreadys highlights the matching
// parentheses In more complicated cases, you might want to use the
// keyboard shortcut. What is it? You can search for it in the menu of all
// Atom commands. It is also written next to the menu option you just clicked.

// EXERCISE 5. Git.
///////////////////
// You made good progress. It is time to look back at when you started
// this exercise. You were a different person, and so this was a different
// file.

// a. Open the Git Tab on the right and visualize the changes in this file

// b. If you are happy with them "stage" them, that is add them to the index.

// c. Add a proper "commit" message to describe your changes. Be concise.

// d. Good! Your changes are saved. Normally, you would be able to push them
// to GitHub, but we won't do it now. In fact you don't have the permissions,
// but we will come back to this later.

// EXERCISE 6. Hydrogen.
////////////////////////
// This is the final obstacle between you and beginning Part 1.
// You got to have Hydrogen installed and configured. Follow the instructions
// on the slides and then come back here.

// a. Try to execute the following code by pressing Ctrl-Return on each line.

let outcome = 'Yes, I made it!';
console.log(outcome);

// b. Did it work? If so try to execute multiple lines at once, by selecting
// them all, and then pressing Ctrl-Return.

console.log('I want to say it 10 times:');
for (let i = 0; i < 10; i++) {
    console.log(i+1 + ': ' + outcome);
}
console.log('Mike drop.');


// Congrats. You can now advance to the next exercise!
