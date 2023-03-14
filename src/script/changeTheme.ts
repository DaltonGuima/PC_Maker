import { hookstate } from "@hookstate/core";

function DefaultTheme() {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = defaultDark ? 'dark' : 'light';

    return theme
}

export const themePage = hookstate(DefaultTheme());

export const switchTheme = () => {
    const newTheme = themePage.get() === 'light' ? 'dark' : 'light';
    themePage.set(newTheme);
}
