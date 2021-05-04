$(document).ready(function() {

    // The button in Exercise 3 is still missing something... what is it?
    // When we hover it it should react to this event!

    // Ref: https://api.jquery.com/hover/

    // You can use .hover() as below
    $('.myClass-0-1').click(
        // things to happen when you hover in
        function() {

            // write here anything you want to happen for each div with the same class
            // this.html('');
            // this.css({'':''});
            // somePredefinedFunction(someValue);

        },
        // things to happen when you hover out
        function() {

            // write here anything you want to happen for each div with the same class
            // this.html('');
            // this.css({'':''});
            // somePredefinedFunction(someValue);

        },
    )



    // Now let's make the button alive!
    // Again with jQuery everything is so easy

    // element.hover(
    // function 1( actions when you over ),
    // function 2( actions when you move away)
    //)


    let mySolution = function() {

        $('.myClass-0-1').hover(
            // first function activates when you hover over the div
            function() {
                $(this).css({
                    'transition':'0.3s',
                    'background-color':'green',
                    'box-shadow':'0px 5px 9px 4px black'
                });
            },
            // second function activates when you stop hovering
            function() {
                $(this).css({
                    'transition':'0.3s',
                    'background-color':'gray',
                    'box-shadow':'0px 3px 7px 3px black'
                });
        });

    };


    // Uncomment to see solution.
    mySolution();

});