# Epic React Typing Game

[![Netlify Status](https://api.netlify.com/api/v1/badges/5954b19f-b293-46d6-8ee5-9a7a7b9b6e25/deploy-status)](https://app.netlify.com/sites/epic-react-typing-game/deploys) [![eslint](https://img.shields.io/badge/eslint-enabled-green.svg)](https://eslint.org/) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg)](https://github.com/prettier/prettier)

## A typing game where you can compete for high scores

Made and meant to be played on 💻.

### [Check the Demo ✨](https://epic-react-typing-game.netlify.com/)

## Why? 🤔

My first brush with the full stack ecosystem, so what better than to make a game ✌️.

## Features / Stack 🛠

- [React](https://reactjs.org/)
- [Styled Components 🎉](https://styled-components.com): styled component system
- Offline support
- [Netlify](https://www.netlify.com) Deployment Friendly
- Serverless functions
- Dark & Light theme support
- Auth0 Login (Google login integrated too)
- User authentication
- Developer tools:
  - `eslint`
  - `prettier`

## How to start ▶️

#### Setting Up Environment

> First have npm installed on your system, set up its path variables.
>
> Then install netlify development environment using npm command:
>
> ```bash
> $ npm install -g netlify-dev
> ```

#### Installing Dependencies

> Run the following command to download the respective dependencies of project :
>
> ```bash
> $ npm i
> ```

#### Running the application

> At this point you have the repository download with all the dependencies installed, but if you try to start by running `npm start` & you are good to go.

After this step we can finally run the project and see the result in http://localhost:3000/ 😃

#### Login Functionality / Backend Setup

> As we are dealing with environment variables, the `.env` file is excluded from `.gitignore` file. Therefore, in order to use login functionality & backend you need have environment  variables set up 
>
> ##### 	[Airtable](https://airtable.com)
>
> * `AIRTABLE_API_KEY` 
>
> * `AIRTABLE_BASE` 
>
> * `AIRTABLE_TABLE`
>
>   
>
>   ##### [Auth](auth0.com)
>
>   
>
> * `AUTH0_KEY_ID`
>
> * `AUTH0_DOMAIN`
>
>   
>
> Along with these environment variables Auth0Provider details also need to be set  up in "Index.js" which are :-
>
> * Domain
> * Client Id
> * Redirect URL
> * Audience
>
> These can be found in the quick start guide on your auth0 dashboard of your app
>
> ```javascript
> ReactDOM.render(
>     <React.StrictMode>
>         <Auth0Provider
>             domain="learn-build-type-xcc.us.auth0.com"
>             clientId="30vUWo93AWF72YAr078uhLC8DJ9B9Ofq"
>             redirectUri={window.location.origin}
>             audience="https://typinggameapi/"
>         >
>             <ScoreProvider>
>                 <App />
>             </ScoreProvider>
>         </Auth0Provider>
>     </React.StrictMode>,
>     document.getElementById("root")
> );
> ```
>
> 

```bash
$ netlify dev
```

## Screenshot and Design 🖼

- `/`: main page with the sections of `Home`, `Game`, `Game Over` and `High Score`.

| Section    |            Screenshot            |
| ---------- | :------------------------------: |
| Home       |     ![Home](media/home.png)      |
| Game       |   ![About me](media/game.png)    |
| Game Over  | ![Projects](media/game_over.png) |
| High Score | ![Writing](media/high_score.png) |


## Themes & Colors 🎨

```css
.dark{
	background: #333;
	color: #f9f9f9;
}

.light{
	background: #f9f9f9;
	color: #333;
}
```

![Theming](./media/home_dark.png)

## Configuration (Optional) 👷‍♂️

The structure for the main page is the following:

```javascript
<Layout>
  <Navbar />
  <Landing />
  <Game />
  <High Score />
  <Game Over />
</Layout>
```

All the components inside `Layout` are `Section` components. A section can have a link inside the `Navbar`.

## License 📝

MIT.