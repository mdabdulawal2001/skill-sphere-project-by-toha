import { createAuthClient } from "better-auth/react"
export const authClient = createAuthClient({
    /** The base URL of the server (optional if you're using the same domain) */
    baseURL: "https://skill-sphere-project-by-toha.vercel.app/"
})

export const { signIn, signUp, useSession } = createAuthClient()