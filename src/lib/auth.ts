import { cookies } from "next/headers";
import { NextResponse } from "next/server";
import crypto from "crypto";

export const ADMIN_COOKIE_NAME = "tanseer_admin";

function getSecret() {
  const secret = process.env.ADMIN_SECRET;
  if (!secret) {
    if (process.env.NODE_ENV === "production") {
      throw new Error("ADMIN_SECRET environment variable is required in production");
    }
    return "tanseer-dev-secret";
  }
  return secret;
}

export function getSessionToken() {
  return crypto.createHmac("sha256", getSecret()).update("admin-session").digest("hex");
}

const cookieOptions = {
  httpOnly: true,
  secure: process.env.NODE_ENV === "production",
  sameSite: "lax" as const,
  path: "/",
  maxAge: 60 * 60 * 24 * 7,
};

/**
 * IMPORTANT (Vercel): set cookies on the NextResponse object.
 * cookies().set() from next/headers often does NOT attach Set-Cookie
 * on Route Handler responses in production serverless.
 */
export function applyAdminSessionCookie(response: NextResponse) {
  response.cookies.set(ADMIN_COOKIE_NAME, getSessionToken(), cookieOptions);
  return response;
}

export function clearAdminSessionCookie(response: NextResponse) {
  response.cookies.set(ADMIN_COOKIE_NAME, "", {
    ...cookieOptions,
    maxAge: 0,
  });
  return response;
}

export async function isAdminAuthenticated() {
  try {
    const cookieStore = await cookies();
    const token = cookieStore.get(ADMIN_COOKIE_NAME)?.value;
    return token === getSessionToken();
  } catch {
    return false;
  }
}

export function verifyPassword(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD;
  if (!adminPassword) {
    if (process.env.NODE_ENV === "production") {
      return false;
    }
    return password === "admin123";
  }
  return password === adminPassword;
}
