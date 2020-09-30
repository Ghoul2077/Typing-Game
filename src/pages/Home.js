import React from "react";
import CallToAction from "../styled/callToAction.js";
import { Accent } from "../styled/Accents.js";
import { StyledTitle } from "../styled/Title.js";

export default function Home() {
    return (
        <div>
            <StyledTitle>Ready To Type ?</StyledTitle>
            <CallToAction to="/game">
                Click or Type <Accent>'S'</Accent> To Start Playing !
            </CallToAction>
        </div>
    );
}
