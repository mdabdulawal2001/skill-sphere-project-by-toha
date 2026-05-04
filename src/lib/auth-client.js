import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "skill-sphere-project-by-toha-j0k907ubr.vercel.app"
})

export const { signIn, signUp, useSession } = createAuthClient()