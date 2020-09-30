import React from "react";
import { Link } from "react-router-dom";
import {
    StyledNavbar,
    StyledNavbrand,
    StyledNavItems,
    StyledLink,
} from "../styled/Navbar.js";
import { Accent } from "../styled/Accents.js";

export default function Navbar() {
    return (
        <StyledNavbar>
            <StyledNavbrand>
                <Link to="/">
                    Learn.Build.<Accent>Type.</Accent>
                </Link>
            </StyledNavbrand>
            <StyledNavItems>
                <li>
                    <StyledLink to="/">Home</StyledLink>
                </li>
                <li>
                    <StyledLink to="/highscores">High Score</StyledLink>
                </li>
                <li>
                    <StyledLink to="/login">Login</StyledLink>
                </li>
            </StyledNavItems>
        </StyledNavbar>
    );
}
