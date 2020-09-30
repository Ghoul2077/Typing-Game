import styled from "styled-components";

export const StyledGame = styled.div`
    height: 75%;
    min-height: 500px;
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-template-columns: minmax(50px, auto) 1fr minmax(50px, auto);
`;

export const StyledScore = styled.p`
    font-size: 1.5rem;
`;

export const StyledTimer = styled.p`
    font-size: 1.5rem;
    grid-column: 3;
`;

export const StyledRandomCharacter = styled.p`
    font-size: 15rem;
    grid-row: 2;
    grid-column: 1/4;
    text-align: center;
    color: #e16365;
`;
