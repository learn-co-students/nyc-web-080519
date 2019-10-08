# react-stateevents-practice1

The database of Dog objects can be found in a JSON-server. If you haven't already done so install json-server:

TO INSTALL: npm install -g json-server

Then start the json-server:

TO START: json-server --watch dogs.json

1. Make a GET request to `http://localhost:4000/dogs`. You should get a response that is an array of multiple book objects that look like this:
   `{ "id": 1, "name": "Happy Slay", "img": "https://www.sciencenews.org/sites/default/files/2018/08/main/articles/082918_lh_crispr-beagles_feat_REV.jpg", "breed": "Beagle", "ageInHumanYears": 21, "defaultMood": "Happy", "moods": { "angry": "I Hate You", "excited": "Excited" } }`

- You have a regular component called DogCard, a container component called DogsList, an App component
- On the DOM your application should show a list of dog images and a button for each image with an innerText that says "Bark"
- When a User clicks on the "Bark" button it should render an `<h2>` to the screen with an innerText that says "Ruff"
- When a User clicks on the button a second time the "Ruff" should be removed from the DOM

# What are we practicing?

- Making decisions about when we need state and which component should hold state
- mapping through an array to render a list of components
- setState
- Event Handling in React

![dog gif](react-events.gif)
