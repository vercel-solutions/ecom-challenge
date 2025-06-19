import { type NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: ["/"],
};

const COOKIE_NAME = "bucket";

export function middleware(req: NextRequest) {
  const options = ["a", "b", "c"];
  const randomIndex = Math.floor(Math.random() * options.length);
  const randomChoice = options[randomIndex];

  const cookie = req.cookies.get(COOKIE_NAME);
  const bucket = cookie?.value || randomChoice;

  const res = NextResponse.rewrite(new URL(`/${bucket}`, req.url));

  if (!cookie) {
    res.cookies.set(COOKIE_NAME, bucket);
  }

  return res;
}
