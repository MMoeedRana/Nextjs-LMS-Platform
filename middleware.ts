import { authMiddleware } from "@clerk/nextjs";

export default authMiddleware({
  publicRoutes: [
    "/",
    "/about",
    "/services",
    "/testimonials",
    "/plans",
    "/contact",
    "/api/webhook",
    "/api/uploadthing",
    "/(landing)(.*)",
  ],
});

export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};
