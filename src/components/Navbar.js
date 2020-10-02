import React from "react";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import {
    StyledNavbar,
    StyledNavbrand,
    StyledNavItems,
    StyledLink,
} from "../styled/Navbar.js";
import { Accent } from "../styled/Accents.js";

export default function Navbar() {
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
                        <button onClick={loginWithRedirect}>Login</button>
                    )}
                    {isAuthenticated && (
                        <button
                            onClick={() =>
                                logout({
                                    returnTo: window.location.origin,
                                })
                            }
                        >
                            Logout
                        </button>
                    )}
                </li>
            </StyledNavItems>
        </StyledNavbar>
    );
}
