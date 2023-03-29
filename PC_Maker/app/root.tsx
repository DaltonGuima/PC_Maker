import { useHookstate } from "@hookstate/core";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useEffect } from "react";
import { themePage } from "./script/changeTheme";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});


export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css", integrity: "sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT", crossorigin: "anonymous" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" }
  ];
};

export default function App() {

  const changeTheme = useHookstate(themePage)
  useEffect(() => {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = defaultDark ? 'dark' : 'light';
    changeTheme.set(theme)
  }, [changeTheme])

  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"></script>
        <script src="https://kit.fontawesome.com/6c49cfa42c.js" crossOrigin="anonymous"></script>
      </head>
      <body>
        <Outlet />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="https://kit.fontawesome.com/6c49cfa42c.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}
