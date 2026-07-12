import { cookies } from "next/headers";
import crypto from "crypto";

const COOKIE_NAME = "tanseer_admin";

function getToken() {
  const secret = process.env.ADMIN_SECRET || "tanseer-dev-secret";
  return crypto.createHmac("sha256", secret).update("admin-session").digest("hex");
}

export async function setAdminSession() {
  const cookieStore = await cookies();
  cookieStore.set(COOKIE_NAME, getToken(), {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    path: "/",
    maxAge: 60 * 60 * 24 * 7,
  });
}

export async function clearAdminSession() {
  const cookieStore = await cookies();
  cookieStore.delete(COOKIE_NAME);
}

export async function isAdminAuthenticated() {
  const cookieStore = await cookies();
  const token = cookieStore.get(COOKIE_NAME)?.value;
  return token === getToken();
}

export function verifyPassword(password: string) {
  const adminPassword = process.env.ADMIN_PASSWORD || "admin123";
  return password === adminPassword;
}
