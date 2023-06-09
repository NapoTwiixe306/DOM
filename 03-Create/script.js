// Array of learner names
const learners = [
  'Learner 1',
  'Learner 2',
  'Learner 3',
  'Learner 4',
  'Learner 5',
  'Learner 6',
  'Learner 7',
  'Learner 8',
  'Learner 9',
  'Learner 10'
];

// Shuffle the learners array to randomize the order
const shuffledLearners = shuffleArray(learners);

// Create a document fragment to hold the sections
const fragment = document.createDocumentFragment();

// Generate sections for each learner and append them to the fragment
shuffledLearners.forEach(learner => {
  const section = createSection(learner);
  fragment.appendChild(section);
});

// Append the fragment to the article
document.querySelector('article').appendChild(fragment);

// Function to shuffle an array in-place
function shuffleArray(array) {
  return array.sort(() => Math.random() - 0.5);
}

// Function to create a section for a learner
function createSection(learner) {
  const section = document.createElement('section');
  const paragraph = document.createElement('p');
  paragraph.textContent = learner;
  section.appendChild(paragraph);

  // Generate a random background color
  const randomColor = getRandomColor();

  // Check if the background color is dark or light
  const isDarkColor = isColorDark(randomColor);

  // Apply background color and text color based on the brightness
  section.style.backgroundColor = randomColor;
  section.style.color = isDarkColor ? 'white' : 'black';

  return section;
}

// Function to generate a random color in hex format
function getRandomColor() {
  return '#' + Math.floor(Math.random() * 16777215).toString(16);
}

// Function to check if a color is dark or light
function isColorDark(color) {
  const rgb = parseColor(color);
  const brightness = (rgb[0] * 299 + rgb[1] * 587 + rgb[2] * 114) / 1000;
  return brightness < 128;
}

// Function to parse a color string into RGB values
function parseColor(color) {
  const match = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(color);
  return match ? [parseInt(match[1], 16), parseInt(match[2], 16), parseInt(match[3], 16)] : [0, 0, 0];
}
