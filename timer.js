/*
* Create a button that starts a timer, creates another button and the new button disappears after 3 seconds.
* The button that starts a timer stays in place.
*
* Populate a counter with the number of clicks on the button in the 3 seconds.
* */

var createBtn = document.querySelector('#createBtn');
var newBtnContainer = document.querySelector('#newBtnContainer');
var clicks = document.querySelector('#clicks');
var counter = 0;

// button starts a timer
createBtn.addEventListener('click', function() {

    setTimeout(function() {

        // button creates another button (after 3 seconds)
        newBtnContainer.innerHTML = '<input type="submit" value="New button!" id="newBtn">';

        // get number of clicks on the button in the 3 seconds (event bubbles to parent div)
        newBtnContainer.addEventListener('click', function() {
            counter++;
        });

        // new button disappears after 3 seconds
        setTimeout(function() {
            newBtnContainer.innerHTML = '';

            // display number of button clicks in the 3 seconds
            clicks.innerHTML = '<p>Button clicks in 3 seconds: ' + counter + '</p>';
        }, 3000);

    }, 3000);
});














