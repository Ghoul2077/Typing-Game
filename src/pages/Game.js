import React, { useState, useEffect, useCallback } from "react";
import {
    StyledGame,
    StyledScore,
    StyledTimer,
    StyledRandomCharacter,
} from "../styled/Game.js";
import { useScore } from "../contexts/ScoreContext.js";

export default function Game({ history }) {
    const possibleCharacters = "abcdefghijklmnopqrstuvwxyz0123456789";
    const [score, setScore] = useScore();
    const [currentChar, setCurrentChar] = useState("");
    const MAX_SECONDS = 60;
    const [ms, setMs] = useState(0);
    const [seconds, setSeconds] = useState(MAX_SECONDS);

    //  Funtion used to calculate time left
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

    //  Funtion used to randomize character
    const randomize = useCallback(() => {
        const randomIndex = Math.floor(
            Math.random() * possibleCharacters.length
        );
        const randomChar = possibleCharacters[randomIndex];
        setCurrentChar(randomChar);
    }, [possibleCharacters]);

    const keyUpHandler = useCallback(
        ({ key }) => {
            if (key === currentChar) {
                setScore((prevScore) => prevScore + 1);
            } else if (score > 0) {
                setScore((prevScore) => prevScore - 1);
            }
            randomize();
        },
        [randomize, currentChar, score, setScore]
    );

    useEffect(() => {
        setScore(0);
    }, [setScore]);

    // Update countdown per 1 ms
    useEffect(() => {
        const currentTime = new Date();
        const interval = setInterval(() => updateTime(currentTime), 1);
        // Ensures no multiple intervals are running simulataneously
        return () => clearInterval(interval);
    }, [updateTime]);

    // Handler for game over scenario
    useEffect(() => {
        if (seconds <= -1) {
            history.replace("/gameover");
        }
    }, [seconds, history]);

    useEffect(() => {
        randomize();
        document.addEventListener("keyup", keyUpHandler);
        return () => document.removeEventListener("keyup", keyUpHandler);
    }, [keyUpHandler, randomize]);

    return (
        <StyledGame>
            <StyledScore>
                Score: <strong>{score}</strong>
            </StyledScore>
            <StyledRandomCharacter>{currentChar}</StyledRandomCharacter>
            <StyledTimer>
                Time :{" "}
                <strong>
                    {seconds}:{ms}
                </strong>
            </StyledTimer>
        </StyledGame>
    );
}
