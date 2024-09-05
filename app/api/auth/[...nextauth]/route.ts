import NextAuth, {NextAuthConfig} from "next-auth"
import GithubProvider from "next-auth/providers/github"
import GoogleProvider from "next-auth/providers/google"
import CredentialsProvider from "next-auth/providers/credentials"
export const {
    handlers: {GET,POST},
    auth,
    singIn,
    SignOut,
} = NextAuth({
    providers: [
        GithubProvider({
            clientId: process.env.GITHUB_CLIENT_ID,
            clientSecret: process.env.GITHUB_CLIENT_SECRET
        }),
        GoogleProvider({
            clientId: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET
        }),
        CredentialsProvider({
            name: "credentials",
            credentials: {
                email: {label: "email", type: "text"},
                password: {label: "password", type: "password"}
            },
            async authorize(credentials){
                
            }
            }
        })
    ]
})