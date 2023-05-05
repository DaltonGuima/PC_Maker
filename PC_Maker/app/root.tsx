import { useHookstate } from "@hookstate/core";
import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Link,
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
  useCatch,
} from "@remix-run/react";
import { useHydrated } from "remix-utils";
import { themePage } from "./script/changeTheme";
import main from "~/styles/main.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.2.1/dist/css/bootstrap.min.css", integrity: "sha384-iYQeCzEYFbKjA/T2uDLTpkwGzCiq6soy8tYaI1GyVh/UjpbCx/TYkiZhlZB6+fzT", crossOrigin: "anonymous" },
    { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Nunito:wght@400;600;700&display=swap" },
    { rel: "shortcut icon", href: "/IconeLogo.png", type: "image/x-icon" },
    { rel: "stylesheet", href: main }
  ];
};


function Document({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <head>
        <Meta />
        <Links />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
        <script src="https://kit.fontawesome.com/6c49cfa42c.js" crossOrigin="anonymous"></script>

      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="https://kit.fontawesome.com/6c49cfa42c.js" crossOrigin="anonymous"></script>
      </body>
    </html>
  );
}

export default function App() {

  const changeTheme = useHookstate(themePage)
  const hydrated = useHydrated();
  if (hydrated) {
    const defaultDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const theme = defaultDark ? 'dark' : 'light';
    changeTheme.set(theme)
  }

  return (
    <Document>
      <Outlet />
    </Document>
  );
}

export function CatchBoundary() {
  const caught = useCatch();

  return (
    <Document>
      <title> {`${caught.status} - ${caught.statusText}`} </title>
      <div id='oopss'>
        <div id='error-text'>
          <span>{caught.status}</span>
          <p>{caught.statusText}</p>
          <p className='hmpg'><Link to='/' className="back">Back To Home</Link></p>
        </div>
      </div>
    </Document>
  );
} 