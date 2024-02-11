# Dev Doc of Pokemon App - Upgraded

## Tools
- [VS Code](https://code.visualstudio.com/download) (1.86.0)
- [Node](https://nodejs.org/en/download) (10.2.4)
- [React](https://vitejs.dev/guide/) (18.2.0)
- [Tailwind](https://tailwindcss.com/docs/guides/vite) CSS (3.4.1)
- [Vite](https://vitejs.dev/guide/) (5.0.8)

## Libraries
- Axios (1.6.7)
    ```
    npm i axios
    ```
    - This is used to make API calls.
    - We have used it to get data from Poke API.
- React Router Dom (6.21.3)
    ```
    npm i react-router-dom
    ```
    - This is used to create routes in this react app.
- Vite (5.0.8)
    - This is a package bundler which is used to compile only the necessary files into this app.
    - Vite only compiles those files that are being used in the app.
- ESLint (8.56.0)
    ```
    npm i @eslint/config
    ```
    - This is used as a document formater in the app which is configured specially for Typescript in React App.

## Language
- TypeScript (5.3.3)

## About
- The Pokemon App is a visual library of Pokemons where you can view a playlist of 10 pokemons at a time and view details of each once at a time.
- This app gives a helpful look to deatils of pokemons which are being fetched using the Poke API.
- The deatils which are displayed here are as follows:
    1) ID
    2) Name
    3) Image (png)
    4) Image (gif)
    5) Base Experience
    6) Height
    7) Weight
    8) Abilities
    9) Types
- Image (png) is used to display in the playlist on the Home page.
- Image (gif) will be displayed when the details page is opened for any specific pokemon.

### Features
1) Searching
    - You can search the pokemons by using the search bar.
    - To perform search operation, click the 'Search' button. It is mandatory, otherwise it won't work.
    - You can write exact full Name or Id to perform search.
2) Pagination
    - Using this feature we have maintained the display of pokemons into just a playlist of 10 pokemons per page.

## User Pages
- Home
    - This is the default landing page.
    - It displays the playlist
- Details
    - This page will be displayed only if clicked on a pokemon from the playlist or by searching.
