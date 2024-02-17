"use strict";

document.addEventListener('DOMContentLoaded', function() {
    var phoneIcon = document.querySelector('.fa-phone');

    if (phoneIcon) {
        phoneIcon.addEventListener('click', function() {
            alert('+420 604 924 729');
        });
    } else {
        console.error("Phone icon not found");
    }
});
