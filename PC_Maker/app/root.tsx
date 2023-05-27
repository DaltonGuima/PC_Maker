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
  isRouteErrorResponse,
  useRouteError,
} from "@remix-run/react";
import { useHydrated } from "remix-utils";
import { themePage } from "./script/changeTheme";
import main from "./styles/main.css";

export const meta: MetaFunction = () => ({
  charset: "utf-8",
  viewport: "width=device-width,initial-scale=1",
});

export const links: LinksFunction = () => {
  return [
    { rel: "stylesheet", href: "https://cdn.jsdelivr.net/npm/bootstrap@5.3.0-alpha3/dist/css/bootstrap.min.css", integrity: "sha384-KK94CHFLLe+nY2dmCWGMq91rCGa5gtU4mk92HdvYe+M/SXH301p5ILy+dN9+nJOZ", crossOrigin: "anonymous" },
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

        <script src="https://kit.fontawesome.com/6c49cfa42c.js" crossOrigin="anonymous"></script>

      </head>
      <body>
        {children}
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" crossOrigin="anonymous"></script>
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

export function ErrorBoundary() {
  const error = useRouteError();
  return (
    <Document>
      <div id='oopss'>
        <div id="error-text">
          <ErrorHandle />
          <p className='hmpg'>
            <Link to='/' className="back">Back To Home</Link>
          </p>
        </div>
      </div>
    </Document>
  )
  function ErrorHandle() {
    if (isRouteErrorResponse(error)) {
      return (
        <>
          <span> {error.status} </span>
          <p>
            {error.statusText}
          </p>
          <p>{error.data}</p>
        </>
      );
    } else if (error instanceof Error) {
      return (
        <>
          <span>Error</span>
          <p>{error.message}</p>
        </>
      );
    } else {
      return <p>Unknown Error</p>;
    }
  }
} 