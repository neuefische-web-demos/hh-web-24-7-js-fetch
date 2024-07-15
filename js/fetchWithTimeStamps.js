// Import Functions & Modules
import { JokeSection } from "../components/JokeSection/JokeSection.js";
import { Joke } from "../components/Joke/Joke.js";

// Declare root Element
const root = document.body;

// Assemble DOM for joke section
const jokeSection = JokeSection();
root.append(jokeSection);

function renderJoke(joke) {
  // Clear the joke section
  jokeSection.innerHTML = "";

  // Create a new joke DOM element and append it to joke section
  const newJoke = Joke(joke);

  jokeSection.append(newJoke);
}

const start = new Date().getTime();
function passedTime() {
  return new Date().getTime() - start;
}

async function getJoke() {
  console.log("in function: 1", passedTime());

  // wait until 3000ms are passed
  while (passedTime() < 3000) {}

  const response = await fetch(
    "https://example-apis.vercel.app/api/bad-jokes/3"
  );
  console.log("in function: 2", passedTime());

  const data = await response.json(); // interpretier die Antwort als json Daten.
  console.log("in function: 3", passedTime());

  renderJoke(data.joke);
}

console.clear();

console.log("global: 1", passedTime());
getJoke();
console.log("global: 2", passedTime());

// wait until 4000ms are passed
while (passedTime() < 4000) {}
