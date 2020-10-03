import { useState, useEffect } from "react";

export default () => {
    const [theme, setTheme] = useState("light");

    useEffect(() => {
        const localStorageTheme = window.localStorage.getItem("theme");
        if (localStorageTheme) {
            setTheme(localStorageTheme);
        }
    }, []);

    function toggleTheme() {
        const newTheme = theme === "light" ? "dark" : "light";
        window.localStorage.setItem("theme", newTheme);
        setTheme(newTheme);
    }

    return [theme, toggleTheme];
};
