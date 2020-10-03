import styled from "styled-components";

export const ScoresListGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr;
`;

export const HighScoreTitle = styled.h1`
    text-align: center;
`;

export const ScoresLI = styled.li`
    display: grid;
    grid-template-columns: 75px repeat(2, 1fr);
    text-align: center;
    font-size: 1.5rem;
    margin-bottom: 0.5rem;
    border-bottom: 1px solid #7f8c8d;
    padding-bottom: 1rem;

    & div{
        border-right: 1px solid var(--main-text-color);
        border-left: 1px solid var(--main-text-color);
    }
`;
