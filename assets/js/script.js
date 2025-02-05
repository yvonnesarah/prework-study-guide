// Define an array of topics to study
var topics = ['HTML', 'CSS', 'Git', 'JavaScript'];

// Select a random topic from the array
var randomTopic = topics[Math.floor(Math.random() * topics.length)];

// Function to list all topics in the array
function listTopics() {
  // Loop through the 'topics' array and log each topic to the console
  for (var x = 0; x < topics.length; x++) {
    console.log(topics[x]);
  }
}

// Function to select a topic randomly and display a message
function selectTopic() {
  // Check the value of the random topic and print the corresponding message
  if (randomTopic === 'HTML') {
    console.log("Let's study HTML!");
  } else if (randomTopic === 'CSS') {
    console.log("Let's study CSS!");
  } else if (randomTopic === 'Git') {
    console.log("Let's study Git!");
  } else if (randomTopic === 'JavaScript') {
    console.log("Let's study JavaScript!");
  } else {
    // Default message if something unexpected occurs
    console.log('Please try again!');
  }
}

// Log a message about the topics learned
console.log('Here are the topics we learned through Prework:');
// Call the function to list all topics
listTopics();

// Log a prompt asking which topic to study next
console.log('Which topic should we study first?');
// Call the function to select and display a random topic message
selectTopic();