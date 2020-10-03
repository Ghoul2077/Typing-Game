import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
    StyledNavbar,
    StyledNavbrand,
    StyledNavItems,
    StyledLink,
    StyledButtonLink,
} from "../styled/Navbar.js";
import { StyledButton } from "../styled/Buttons";
import { Accent } from "../styled/Accents.js";

export default function Navbar({ toggleTheme }) {
    const { isAuthenticated, loginWithRedirect, logout } = useAuth0();

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
                    {!isAuthenticated && (
                        <StyledButtonLink onClick={loginWithRedirect}>
                            Login
                        </StyledButtonLink>
                    )}
                    {isAuthenticated && (
                        <StyledButtonLink
                            onClick={() =>
                                logout({
                                    returnTo: window.location.origin,
                                })
                            }
                        >
                            Logout
                        </StyledButtonLink>
                    )}
                </li>
                <li>
                    <StyledButton onClick={toggleTheme}>
                        Toggle Theme
                    </StyledButton>
                </li>
            </StyledNavItems>
        </StyledNavbar>
    );
}
