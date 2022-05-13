# Challenges Coding Exercise Frontend

### Problem Statement

Build a small application that should be able to: 

- Search for Pokemon by text through use of a search bar.
- Filter Pokemon by type using a dropdown.
- Add and remove a Pokemon to and from your Favorites by clicking the heart icon.
- Use tabs to switch between `All` Pokemon and `Favorite` Pokemon views.
- Change the view from either a grid or list.
- View Pokemon details using a `/:name` route.
- Clicking on a Pokemon image or name should navigate to the above route to view the Pokemon details.
- On the Pokemon details page, have a speaker icon that, when clicked, plays the sound of that Pokemon.

In addition to the above features, below are some optional features that we'd love to see at least one of:
- Infinitely scrolled or paginated list to handle on-demand data-fetching for the long list of Pokemon.
- Add a quick view button on the Pokemon list items that shows a modal with more information of the Pokemon.
- Add toast notifications to show success or error messages when adding or removing a Pokemon to and from your Favorites.

### Technologies Used

The technologies used in this exxercise include:

- React.
- React Router.
- Styled Components.


### Running Pokemon Take Home Locally

#### Run the frontend
```
$ cd frontend
$ npm install
$ npm start
```

Open your browser and navigate to:

```
  http://localhost:3000/
```

####  Problem Implementation

<img src="assets/pokemon-take-home-01.gif" alt="pokemon-take-home-01" width="500"/>

Considering that the most valued technology stack for this exercise required using [React](https://github.com/facebook/react), I pulled out the `frontend` part of the provided boilerplate and served up the `pokemons.json` file from the root of the `src` folder. 

#### Features

##### 1. Search for Pokemon by text using a search bar

The functionality for the Search Bar tracks each change whenever the user types into the input field. The useState Hook declares a state variable and returns a pair of values: the current state and a function that updates the state whenever there is a change in the input field.

<img src="assets/pokemon-take-home-02.gif" alt="pokemon-take-home-02" width="500"/>

##### 2. Filter Pokemon by type using a dropdown

The functionality for the Filter Dropdown 

<img src="assets/pokemon-take-home-03.gif" alt="pokemon-take-home-03" width="500"/>

##### Add and remove a Pokemon to and from your Favorites by clicking the heart icon.

<img src="assets/pokemon-take-home-04.gif" alt="pokemon-take-home-04" width="500"/>

##### Use tabs to switch between `All` Pokemon and `Favorite` Pokemon views.

<img src="assets/pokemon-take-home-05.gif" alt="pokemon-take-home-05" width="500"/>

##### Change the view from either a grid or list.

<img src="assets/pokemon-take-home-06.gif" alt="pokemon-take-home-06" width="500"/>

##### Clicking on a Pokemon image or name should navigate to the above route to view the Pokemon details.

<img src="assets/pokemon-take-home-07.gif" alt="pokemon-take-home-07" width="500"/>

#### Bonus Feature

##### Add a quick view button on the Pokemon list items that shows a modal with more information of the Pokemon.

<img src="assets/pokemon-take-home-08.gif" alt="pokemon-take-home-08" width="500"/>