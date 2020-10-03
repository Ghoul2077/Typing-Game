import React, { useState, useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
import { useScore } from "../contexts/ScoreContext.js";
import {
    Wrapper,
    Heading,
    StyledScore,
    StyledLink,
} from "../styled/GameOver.js";

export default function GameOver({ history }) {
    const [score] = useScore();
    const [scoreMessage, setScoreMessage] = useState("");
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();

    useEffect(() => {
        if (score === -1) {
            history.replace("/");
            return;
        }

        async function saveHighScore() {
            const token = await getAccessTokenSilently();
            const options = {
                method: "POST",
                body: JSON.stringify({ score }),
                headers: { Authorization: `Bearer ${token}` },
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
                .catch((err) => console.error(err));
        }

        if (isAuthenticated) saveHighScore();
    }, [score, history, getAccessTokenSilently, isAuthenticated]);

    return (
        <Wrapper>
            <Heading>Game Over</Heading>
            <p>{scoreMessage}</p>
            {!isAuthenticated && (
                <p>You should login or Sign up to compete for high scores !</p>
            )}
            <StyledScore>{score}</StyledScore>
            <StyledLink to="/">Go Home</StyledLink>
            <StyledLink to="/game">Play Again</StyledLink>
        </Wrapper>
    );
}
