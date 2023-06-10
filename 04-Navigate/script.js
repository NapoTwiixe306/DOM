// Select the last child of the <ol> tag and put it at the beginning of the list
let ol = document.querySelector('ol');
let lastChild = ol.lastElementChild;
ol.prepend(lastChild);

// Move the <h2> of the third section in the second one and vice-versa
var thirdSection = document.querySelectorAll('section')[2];
var secondSection = document.querySelectorAll('section')[1];
var h2ThirdSection = thirdSection.querySelector('h2');
var h2SecondSection = secondSection.querySelector('h2');
secondSection.insertBefore(h2ThirdSection, secondSection.firstChild);
thirdSection.insertBefore(h2SecondSection, thirdSection.firstChild);

// Delete the last section from the DOM
var lastSection = document.querySelectorAll('section')[2];
lastSection.parentNode.removeChild(lastSection);
