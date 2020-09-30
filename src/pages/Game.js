import React, { useState, useEffect, useCallback } from "react";
import {
    StyledGame,
    StyledScore,
    StyledTimer,
    StyledRandomCharacter,
} from "../styled/Game.js";

export default function Game({ history }) {
    const [score, setScore] = useState(0);
    const MAX_SECONDS = 5;
    const [ms, setMs] = useState(0);
    const [seconds, setSeconds] = useState(MAX_SECONDS);

    const updateTime = useCallback((startTime) => {
        const endDate = new Date();
        const diffSeconds = endDate.getTime() - startTime.getTime();
        const totalMsLeft = MAX_SECONDS * 1000 - diffSeconds;
        let secondsLeft = Math.floor(totalMsLeft / 1000);
        let msLeft = totalMsLeft - secondsLeft * 1000;

        secondsLeft = secondsLeft.toString().padStart(2, "0").slice(-2);
        msLeft = msLeft.toString().padStart(4, "0").slice(-4);

        setSeconds(secondsLeft);
        setMs(msLeft);
    }, []);

    useEffect(() => {
        const currentTime = new Date();
        const interval = setInterval(() => updateTime(currentTime), 1);
        // Ensures no multiple intervals are running simulataneously
        return () => clearInterval(interval);
    }, [updateTime]);

    useEffect(() => {
        if (seconds <= -1) {
            history.replace("/gameover");
        }
    }, [seconds, history]);

    return (
        <StyledGame>
            <StyledScore>
                Score: <strong>{score}</strong>
            </StyledScore>
            <StyledRandomCharacter>A</StyledRandomCharacter>
            <StyledTimer>
                Time :{" "}
                <strong>
                    {seconds}:{ms}
                </strong>
            </StyledTimer>
        </StyledGame>
    );
}
