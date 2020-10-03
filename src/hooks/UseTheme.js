import { useState, useEffect } from "react";

export default () => {
    const [theme, setTheme] = useState("light");

    function toggleTheme() {
        setTheme(theme === "light" ? "dark" : "light");
    }

    return [theme, toggleTheme];
};
