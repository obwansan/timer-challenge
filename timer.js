/*
* Create a button that starts a timer, creates another button and the new button disappears after 3 seconds.
* The button that starts a timer stays in place.
* */

var createBtn = document.querySelector('#createBtn');
var newBtnContainer = document.querySelector('#newBtnContainer');

// button starts a timer
createBtn.addEventListener('click', function() {
    setTimeout(function() {
        // button creates another button
        newBtnContainer.innerHTML = '<input type="submit" value="New button!" id="newBtn">';
    }, 3000)
});




// new button disappears after 3 seconds






