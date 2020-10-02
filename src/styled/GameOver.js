import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Wrapper = styled.div`
    text-align: center;
`;

export const Heading = styled.h1`
    font-size: 4rem;
`;

export const StyledScore = styled.p`
    font-size: 7rem;
    grid-row: 2;
    grid-column: 1/4;
    text-align: center;
    color: #e16365;
    margin-top: 3rem;
    margin-bottom: 3rem;
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 200ms;
    margin: 2rem;

    &:hover {
        color: #e16365;
    }
`;
