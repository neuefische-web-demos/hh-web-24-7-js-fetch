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

async function getJoke() {
  // wait until 3000ms are passed
  while (passedTime() < 3000) {}

  const response = await fetch(
    "https://example-apis.vercel.app/api/bad-jokes/3"
  );
  const data = await response.json(); // interpretier die Antwort als json Daten.

  renderJoke(data.joke);
}

getJoke();
