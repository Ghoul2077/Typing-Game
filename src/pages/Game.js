import React from "react";
import {
    StyledGame,
    StyledScore,
    StyledTimer,
    StyledRandomCharacter,
} from "../styled/Game.js";

export default function Game() {
    return (
        <StyledGame>
            <StyledScore>
                Score: <strong>0</strong>
            </StyledScore>
            <StyledRandomCharacter>A</StyledRandomCharacter>
            <StyledTimer>
                Time : <strong>00:000</strong>
            </StyledTimer>
        </StyledGame>
    );
}
