import React from "react";
import { useScore } from "../contexts/ScoreContext.js";
import { StyledLink } from "../styled/Navbar.js";

export default function GameOver({ history }) {
    const [score] = useScore();

    if (score === -1) history.replace("/");

    return (
        <div>
            <h1>GameOver</h1>
            <p>Your Score is : {score}</p>
            <StyledLink to="/">Go Home</StyledLink>
            <StyledLink to="/game">Play Again</StyledLink>
        </div>
    );
}
