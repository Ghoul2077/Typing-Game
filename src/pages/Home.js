import React, { useEffect, useCallback } from "react";
import CallToAction from "../styled/callToAction.js";
import { Accent } from "../styled/Accents.js";
import { StyledTitle } from "../styled/Title.js";

export default function Home({ history }) {
    const shouldStartGame = useCallback(({ key }) => {
        if (key === "s") history.push("/game");
    }, [history]);

    useEffect(() => {
        window.addEventListener("keydown", shouldStartGame);
        return () => window.removeEventListener("keydown", shouldStartGame);
    }, [shouldStartGame]);

    return (
        <div>
            <StyledTitle>Ready To Type ?</StyledTitle>
            <CallToAction to="/game">
                Click or Type <Accent>'S'</Accent> To Start Playing !
            </CallToAction>
        </div>
    );
}
