import {NextRequest} from "next/server";
import {NextResponse} from "next/server";

import {getRandomCampaignBucket} from "@/api";

export function middleware(request: NextRequest) {
  let bucket = "";

  const bucketCookie = request.cookies.get("bucket");

  if (bucketCookie) {
    bucket = bucketCookie.value;
  } else {
    bucket = getRandomCampaignBucket();
  }

  const rewriteUrl = request.nextUrl.clone();

  rewriteUrl.pathname += `${bucket}`;

  const response = NextResponse.rewrite(rewriteUrl);

  response.cookies.set("bucket", bucket);

  return response;
}

export const config = {
  matcher: ["/"],
};
