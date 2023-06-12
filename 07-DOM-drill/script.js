// 1. Use childNodes to list all the children from the <ul>
const ul = document.querySelector('ul');
const children = ul.childNodes;

console.log(children);

// 2. Write a for loop to iterate over every child.
for (let i = 0; i < children.length; i++) {
  const child = children[i];
  
  // 3. Use a condition in the loop to only iterate over element nodes.
  if (child.nodeType === 1) {
    // 4. Find the element that contains Fast and Furious. If it's not the first element, move it to the top of the list.
    if (child.textContent.includes('Fast and Furious') && i > 0) {
      ul.insertBefore(child, ul.firstChild);
    }

    // 5. Add a class .important to the element.
    child.classList.add('important');

    // 6. Add an eventListener on every item of the list.
    child.addEventListener('click', function() {
      // 7. If the item is clicked, an alert() pops up to display the name of the clicked element.
      if (child.textContent.includes('Fast and Furious')) {
        // Special condition for Fast and Furious.
        alert("The most important franchise ever, the story of DOM(inic) Toretto's family. It's not about car, it's about family.");
      } else {
        alert(child.textContent);
      }
    });
  }
}

// (*) Remove duplicates using removeChild.
const listItems = ul.getElementsByTagName('li');
const uniqueItems = new Set();

for (let i = listItems.length - 1; i >= 0; i--) {
  const item = listItems[i];
  if (uniqueItems.has(item.textContent)) {
    ul.removeChild(item);
  } else {
    uniqueItems.add(item.textContent);
  }
}

// (*) Add an eventListener on the document body, listening for keyup.
document.body.addEventListener('keyup', function(event) {
  // Check if the 'r' key is pressed.
  if (event.key === 'r') {
    const items = Array.from(listItems);
    const firstItem = items.find(item => item.textContent.includes('Fast and Furious'));
    items.splice(items.indexOf(firstItem), 1);
    items.sort(() => Math.random() - 0.5);
    items.unshift(firstItem);
    items.forEach(item => ul.appendChild(item));
  }
  
  // Check if the 'd' key is pressed.
  if (event.key === 'd') {
    const fastAndFuriousElement = ul.querySelector('.important');
    const clonedElement = fastAndFuriousElement.cloneNode(true);
    ul.appendChild(clonedElement);
  }
});

// Create a new <div> before the list, using createElement and insertBefore.
const newDiv = document.createElement('div');
ul.parentNode.insertBefore(newDiv, ul);

// Using createElement, create a <select> tag into the previously created <div>, with two <option>s in it: "important franchises" and "normal franchises".
const select = document.createElement('select');
newDiv.appendChild(select);

const option1 = document.createElement('option');
option1.value = 'important';
option1.textContent = 'Important Franchises';
select.appendChild(option1);

const option2 = document.createElement('option');
option2.value = 'normal';
option2.textContent = 'Normal Franchises';
select.appendChild(option2);

// Add an eventListener to the <select>, on change, if the option "important franchise" is chosen, only display items of the list that have the class .important.
select.addEventListener('change', function() {
  const selectedOption = select.value;
  
  if (selectedOption === 'important') {
    Array.from(listItems).forEach(item => {
      if (item.classList.contains('important')) {
        item.style.visibility = 'visible';
      } else {
        item.style.visibility = 'hidden';
      }
    });
  } else if (selectedOption === 'normal') {
    Array.from(listItems).forEach(item => {
      item.style.visibility = 'visible';
    });
  }
});
 