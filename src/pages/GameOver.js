import React, { useState, useEffect } from "react";
import { useScore } from "../contexts/ScoreContext.js";
import { StyledLink } from "../styled/Navbar.js";
import {StyledRandomCharacter} from "../styled/Game.js";

export default function GameOver({ history }) {
    const [score] = useScore();
    const [scoreMessage, setScoreMessage] = useState("");

    useEffect(() => {
        if (score === -1) {
            history.replace("/");
            return;
        }

        async function saveHighScore() {
            const options = {
                method: "POST",
                body: JSON.stringify({ name: "Anonymous User", score }),
            };
            fetch("/.netlify/functions/saveHighScores", options)
                .then((res) => res.json())
                .then(({ id }) =>
                    id
                        ? setScoreMessage(
                              "Congrats! You just got a high score!!"
                          )
                        : setScoreMessage("Sorry not a high score, Keep Trying")
                )
                .catch((err) => console.err(err));
        }
        saveHighScore();
    }, [score, history]);

    return (
        <div>
            <h1>GameOver</h1>
            <p>Your Score is : {score}</p>
            <StyledRandomCharacter>{scoreMessage}</StyledRandomCharacter>
            <StyledLink to="/">Go Home</StyledLink>
            <StyledLink to="/game">Play Again</StyledLink>
        </div>
    );
}
