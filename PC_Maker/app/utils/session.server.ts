import { createCookieSessionStorage, redirect } from "@remix-run/node";
import axios from "axios";

type LoginForm = {
  password: string | undefined;
  email: string | undefined;
};

type User = {
  id: number | undefined;
  senha: string | undefined;
  email: string | undefined;
  nome: string | undefined,
  dataNascimento: string | undefined
};


export async function loginSession({ email, password }: LoginForm) {
  return axios(`http://127.0.0.1:8080/api/v1/usuarios/${email}`)
    .catch(() => { return null })
    .then((response) => {
      const user: User = response?.data
      if (!user)
        return null

      if (password != user.senha)
        return null

      return { id: user.id, email }

    }

    )

}

const sessionSecret = process.env.SESSION_SECRET;
if (!sessionSecret) {
  throw new Error("SESSION_SECRET must be set");
}

const storage = createCookieSessionStorage({
  cookie: {
    name: "RJ_session",
    // normally you want this to be `secure: true`
    // but that doesn't work on localhost for Safari
    // https://web.dev/when-to-use-local-https/
    secure: process.env.NODE_ENV === "production",
    secrets: [sessionSecret],
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 30,
    httpOnly: true,
  },
});

export async function createUserSession(
  userId: number | undefined,
  redirectTo: string
) {
  const session = await storage.getSession();
  session.set("userId", userId);
  return redirect(redirectTo, {
    headers: {
      "Set-Cookie": await storage.commitSession(session),
    },
  });
}

function getUserSession(request: Request) {
  return storage.getSession(request.headers.get("Cookie"));
}

export async function getUserId(request: Request) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId) {
    return null;
  }
  return userId;
  // return storage.getSession(request.headers.get("Cookie"));
}

export async function requireUserId(
  request: Request,
  redirectTo: string = new URL(request.url).pathname
) {
  const session = await getUserSession(request);
  const userId = session.get("userId");
  if (!userId || typeof userId !== "string") {
    const searchParams = new URLSearchParams([
      ["redirectTo", redirectTo],
    ]);
    throw redirect(`/login?${searchParams}`);
  }
  return userId;
}

export async function getUser(request: Request) {
  const userId = await getUserId(request);
  return axios(`http://127.0.0.1:8080/api/v1/usuarios/id/${userId}`)
    .catch(() => { return null })
    .then((response) => {
      const user: User = response?.data

      if (typeof userId !== "number") {
        return null;
      }

      return user;
    }

    )
}

export async function getBuildUser(
  user: User, buildID: number
) {
  return await axios(`http://127.0.0.1:8080/api/v1/builds/${buildID}`)
    .catch(error => console.log(error))
    .then((response) => {
      if (response?.data.usuario.id != user.id) {
        return false
      }
      return true
    })


}

export async function logout(request: Request) {
  const session = await getUserSession(request);
  return redirect("/", {
    headers: {
      "Set-Cookie": await storage.destroySession(session),
    },
  });
}