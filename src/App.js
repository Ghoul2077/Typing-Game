import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { ThemeProvider } from "styled-components";
import Home from "./pages/Home.js";
import GameOver from "./pages/GameOver.js";
import Game from "./pages/Game.js";
import HighScores from "./pages/HighScores.js";
import Navbar from "./components/Navbar.js";
import { Container } from "./styled/Container.js";
import { Main } from "./styled/Main.js";
import Global from "./styled/Global.js";
import { DarkTheme, LightTheme } from "./styled/Theme";
import useTheme from "./hooks/UseTheme";
import Loader from "./styled/Loader";

function App() {
  const { loading } = useAuth0();
  const [theme, toggleTheme] = useTheme();

  const currentTheme = theme === "light" ? LightTheme : DarkTheme;

  return (
    <Router>
      <ThemeProvider theme={currentTheme}>
        <Global />
        <Main>
          {loading && (
            <Loader>
              <p>Loading....</p>
            </Loader>
          )}
          {!loading && (
            <Container>
              <Navbar toggleTheme={toggleTheme} />
              <Switch>
                <Route path="/game" component={Game} />
                <Route path="/highScores" component={HighScores} />
                <Route path="/gameOver" component={GameOver} />
                <Route path="/" component={Home} />
              </Switch>
            </Container>
          )}
        </Main>
      </ThemeProvider>
    </Router>
  );
}

export default App;
