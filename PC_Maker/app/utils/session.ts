import { createCookieSessionStorage, redirect } from "@remix-run/node";
import axios from "axios";
import { useState } from "react";

type LoginForm = {
  password: string | undefined;
  email: string | undefined;
};

type User = {
  id: string | undefined;
  password: string | undefined;
  email: string | undefined;
};

/* export async function login({
    password,
    username,
  }: LoginForm) {
    const user = await db.user.findUnique({
      where: { username },
    });
    if (!user) {
      return null;
    }
  
    const isCorrectPassword = await bcrypt.compare(
      password,
      user.passwordHash
    );
    if (!isCorrectPassword) {
      return null;
    }
  
    return { id: user.id, username };
  } */

/* export async function loginS({ email, password }: LoginForm) {


  const user = axios(`http://127.0.0.1:8080/api/v1/usuarios/${email}`)
    .catch(() => { return null })

  return { id: user.then(responde => return }), email }
} */

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
  userId: string | undefined,
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