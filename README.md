# React Pokedex

### Tech stack

- **React** - frontend/view library
- **Redux** - state management library
- **Axios** - For HTTP client

### Setup and Run

- `$ git clone https://github.com/xxryan1234/react-pokdex.git && cd github` will download the app and cd to the folder once done.

# for both client and server run

- `yarn install` - to install dependencies.
- `yarn start` - Runs the app in development mode.
- `yarn test` - Runs the tests inside the app.

### Questions

- packages/libraries used.

  - [react-loadable](https://github.com/jamiebuilds/react-loadable) - A higher order component for loading components with dynamic imports.
  - [ant-design](https://github.com/ant-design/ant-design) - An enterprise-class UI design language and React-based implementation.
  - [react](https://facebook.github.io/react/) - awesome view library
  - [react-router](https://github.com/ReactTraining/react-router) - for routing
  - [react-boilerplate](https://github.com/react-boilerplate/react-boilerplate/) - A highly scalable, offline-first foundation with the best developer experience and a focus on performance and best practices.
  - [ImmutableJS](https://facebook.github.io/immutable-js/) - Immutable data structures can be deeply compared in no time. This allows us to efficiently determine if our components need to rerender since we know if the props changed or not!
  - [react-redux](http://redux.js.org/) - state management library. The state of your whole application is stored in an object tree within a single store.
  - [redux-saga](https://github.com/redux-saga/redux-saga) - middleware to handle promises
  - [reselect](https://github.com/reduxjs/reselect) - Selectors can compute derived data, allowing Redux to store the minimal possible state.
  - [styled components](https://www.styled-components.com/) - Utilising tagged template literals (a recent addition to JavaScript) and the power of CSS, styled-components allows you to write actual CSS code to style your components.

- Structure for the project

  - Top Level

  ```
  app
  │
  │
  ├── components  <--- stateless components
  │   ├── Button
  │   │   ├── css.js <-- styled component
  │   │   └── index.js
  │   │
  │   └── Img
  │       ├── css.js
  │       └── index.js
  │
  ├── containers <--- stateful components/route components
  │   ├── App
  │   │   ├── index.js
  │   │   └── logo.png
  │   │
  │   ├── HomePage
  │   │   ├── actions.js
  │   │   ├── constants.js
  │   │   ├── index.js
  │   │   ├── reducer.js
  │   │   ├── selectors.js
  │   │   └── tests
  │   │       ├── actions.test.js
  │   │       └── reducer.test.js
  │   └──NotFoundPage
  │       └── index.js
  │
  │
  ├── index.html
  ├── routes.js
  ├── manifest.json
  ├── configureStore.js
  └── app.js
  ```

### Update - pokeapi outage is fixed.

- The api is now running, so I will remove the stub data and use the apis
- Disregard Disclaimer below...

### Disclaimer

- I wasn't able to use the API successfully as pokeApi had outages as of late: [#369](https://github.com/PokeAPI/pokeapi/issues/369), [#373](https://github.com/PokeAPI/pokeapi/issues/373), [#374](https://github.com/PokeAPI/pokeapi/issues/374)
- [Outage](https://imgur.com/a/bVWFCXj) removing the offset/limit on the api still doesn't fix the problem. I tried asking the dev team behind the api because they have a [slack channel](https://imgur.com/a/d93L8IP). One suspects that it must be a [Cloudfare issue](https://imgur.com/a/IF7GCRv) as it works on some IP's and it doesn't work for some as well. :(
- I think they are having problems at the moment as they are in a [turnover period](https://github.com/PokeAPI/pokeapi/issues/350) as the owner has decided to stop supporting pokeApi
- I had to improvise and use stubData instead. Unfortunately, getting all detailed info will be too big so I just resorted with pokemon names.

### What would I have done if I was able to use the api successfully

- remove the stubdata for pokemon list and pokemon nature
- I would have used these apis:

  To get the list of pokemons: `https://pokeapi.co/api/v2/pokemon/`

  To get list of pokemon nature: `https://pokeapi.co/api/v2/nature/`

  To get specific pokemon data: `https://pokeapi.co/api/v2/pokemon/:id/`

- I planned to have a saga specifically when `selectPokemon` action is dispatched, that way I can fetch the specific pokemon data and dispatch supposedly an action called `selectPokemonSuccess` so that I will be able display pokemon image on the `PokemonLineup` component and other details about the pokemon when displayed on `PokemonData` component.
- The current implementation would have been a little different specifically on design aspects, as currently I am only displaying pokemon name instead of an image of the pokemon on `PokemonLineup` component.
