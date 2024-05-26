// import { authMiddleware } from "@clerk/nextjs";
// export default authMiddleware({});
// export const config = {
//   matcher: ["/((?!.+.[w]+$|_next).)", "/", "/(api|trpc)(.)"],
// };
// import { authMiddleware } from "@clerk/nextjs";
// import { authMiddleware } from "@clerk/nextjs/server";

// export default authMiddleware({});
// import { authMiddleware } from "@clerk/nextjs/server";
// const middleware = authMiddleware({});
// export default middleware;

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();



// Remove the config object or place it appropriately in your Next.js application configuration.