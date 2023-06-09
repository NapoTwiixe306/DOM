// Add a title attribute to elements with the 'important' class
const importantElements = document.querySelectorAll('.important');
importantElements.forEach(element => {
  element.setAttribute('title', 'This is an important item');
});

// Select all img tags and hide them if they don't have the 'important' class
const images = document.querySelectorAll('img');
images.forEach(image => {
  if (!image.classList.contains('important')) {
    image.style.display = 'none';
  }
});

// Loop through all paragraphs, display their content, and set random text color
const paragraphs = document.querySelectorAll('p');
paragraphs.forEach(paragraph => {
  const content = paragraph.textContent;
  console.log(content);

  if (!paragraph.classList.length) {
    // Generate a random color in hex format
    const randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    paragraph.style.color = randomColor;
  } else {
    console.log(`Classname: ${paragraph.className}`);
  }
});
