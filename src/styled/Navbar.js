import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const StyledNavbar = styled.nav`
    display: grid;
    grid-template-columns: 1fr auto;
    padding: 20px;
    margin-bottom: 2rem;
`;

export const StyledNavbrand = styled.div`
    font-size: 1.4rem;

    & > a {
        text-decoration: none;
    }
`;

export const StyledNavItems = styled.ul`
    list-style: none;
    padding-left: 0;
    display: grid;
    grid-auto-flow: column;
    grid-gap: 20px;
`;

export const StyledLink = styled(NavLink)`
    text-decoration: none;
    font-size: 1.2rem;
    transition: color 200ms;

    &:hover {
        color: var(--accent-color);
    }
`;

export const StyledButtonLink = styled.button`
    text-decoration: none;
    border: none;
    font-size: 1.2rem;
    cursor: pointer;
    background: none;

    &:hover {
        color: var(--accent-color);
    }
`;
