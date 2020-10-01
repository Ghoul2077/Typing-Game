import React, { useState, useEffect } from "react";
import {
    ScoresListGrid,
    ScoresLI,
    HighScoreTitle,
} from "../styled/HighScore.js";

export default function HighScores() {
    const [highScores, setHighScores] = useState([]);

    useEffect(() => {
        async function loadHighScores() {
            try {
                const res = await fetch("/.netlify/functions/getHighScores");
                const scores = await res.json();
                setHighScores(scores);
            } catch (err) {
                console.err(err);
            }
        }
        loadHighScores();
    }, [setHighScores]);

    return (
        <div>
            <HighScoreTitle>High Scores</HighScoreTitle>
            <ScoresListGrid>
                {highScores.map(({ fields }, index) => {
                    let ranking = index + 1;
                    if (ranking === 1) ranking = "👑";
                    if (ranking === 2) ranking = "🏅";
                    if (ranking === 3) ranking = "🔥";
                    return (
                        <ScoresLI key={index}>
                            <div>{ranking}</div>
                            <div>{fields.Name}</div>
                            <div>{fields.Score}</div>
                        </ScoresLI>
                    );
                })}
            </ScoresListGrid>
        </div>
    );
}
