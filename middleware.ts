import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { AUTH_ROUTES, BASE_URL, PUBLIC_ROUTES } from "./constants/routes";
import { cookies } from "next/headers";
import { verify } from "./actions/sessions";

// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
	const { pathname } = request.nextUrl;

	const isPublicRoute = PUBLIC_ROUTES.includes(pathname);
	const cookie = (await cookies()).get("session")?.value;
	const session = await verify(cookie);

	if (!isPublicRoute && !session) {
		return NextResponse.redirect(new URL(AUTH_ROUTES.LOGIN, request.url));
	}

	if (isPublicRoute && session) {
		return NextResponse.redirect(new URL(BASE_URL, request.url));
	}
	return NextResponse.next();
}

// See "Matching Paths" below to learn more
export const config = {
	matcher: [
		/*
		 * Match all request paths except for the ones starting with:
		 * - api (API routes)
		 * - _next/static (static files)
		 * - _next/image (image optimization files)
		 * - favicon.ico, sitemap.xml, robots.txt (metadata files)
		 */
		"/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
	],
};
