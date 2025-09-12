// middleware.ts
import { auth } from "@/auth"; // <- use your auth.ts file

export default auth((req) => {
  // You can add custom logic here if needed
  // e.g., protect specific routes
});

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|.*\\.png$).*)"],
};