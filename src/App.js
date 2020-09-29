import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home.js";
import GameOver from "./pages/GameOver.js";
import Game from "./pages/Game.js";
import HighScores from "./pages/HighScores.js";
import Navbar from "./components/Navbar.js";
import { Container } from "./styled/Container.js";
import { Main } from "./styled/Main.js";
import Global from "./styled/Global.js";

function App() {
  return (
    <Router>
      <Global />
      <Main>
        <Container>
          <Navbar />
          <Switch>
            <Route path="/game" component={Game} />
            <Route path="/highScores" component={HighScores} />
            <Route path="/gameOver" component={GameOver} />
            <Route path="/" component={Home} />
          </Switch>
        </Container>
      </Main>
    </Router>
  );
}

export default App;
