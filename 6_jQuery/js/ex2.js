$(document).ready(function() {

    // Exercise : click().
    //////////////////////

    // Make <DIV> with class "myClss-0-1" look and behave like a button.

    
    // You can use .click() to define a lister on clicks.
    $('.myClass-0-1').click(function() {

        console.log('I was clicked!');
        
        // Is doGradient defined?
        mySolution();
    })

    // Try to figure out the properties to make the div look like a button
    $('.myClass-0-1').css({

    });



    let mySolution = function() {

        // But the div doesn't look or feel like a button
        // Let's shape it into a fancy button

        // First color it and give it a small button shape
        // Easier said than done.

        $('.myClass-0-1').css({
            'background-color':'gray',
            'color':'white',
            'width':'250px',
            'height':'75px',
            'margin-bottom':'50px',
            'padding-top':'20px',
            'padding-left':'20px',
            'border':'3px solid black',
            'cursor':'pointer',
            'box-shadow':'0px 3px 7px 3px black',
            'border-radius':'20px'
        });

        // Clicking on objects has never been so easy
        // simply query the div then use .click()
        $('.myClass-0-1').click(function() {

            // this is the HTML element, we need to wrap it
            // in jQuery to make the .css method available.
            $(this).css({
                'transition': '0.1s',
                'background-color': '#CCC'
            }); 

            // Is doGradient defined?
            doGradient(Math.floor(Math.random()*255), 
                        Math.floor(Math.random()*255));

            // Using the arrow function does not change the
            // reference of "this".
            setTimeout(() => {
                $(this).css({
                    'transition': '0.2s',
                    'background-color': 'gray'
                }); 
            }, 150);
            
        });
    
    }

    // Uncomment to see solution.
    mySolution();
});