import React from "react";
import { Link, NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <Link to="/">
                Learn.Build.<span>Type.</span>
            </Link>
            <ul>
                <li>
                    <NavLink to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink to="/highscores">High Score</NavLink>
                </li>
                <li>
                    <NavLink to="/login">Login</NavLink>
                </li>
            </ul>
        </nav>
    );
}
