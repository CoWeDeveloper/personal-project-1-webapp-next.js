import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

declare module "next-auth" {
    interface Session {
        user: {
            id: string;
            name?: string;
            email?: string;
            image?: string;
        }
    }
}

export const authOptions: NextAuthOptions = {
    providers: [
        CredentialsProvider({
            name: "Login",
            credentials: {
                email: { label: 'Email', type: 'text' },
                password: { label: 'Password', type: 'password' }
            },
            async authorize(credentials: any): Promise<any> {
                const user = {
                    id: "1",
                    name: "Admin",
                    email: "cloudadmin@cloudtenants.com"
                }
                if (credentials.email === "cloudadmin@cloudtenants.com" && credentials.password === "pass123@") {
                    return user;
                }
                return null;
            },
        }),
    ],
    pages: {
        signIn: "/login", // URL for the custom sign-in page
    },
    session: {
        strategy: 'jwt',
    },
    secret: process.env.NEXTAUTH_SECRET,
    callbacks: {
        async session({ session, token }) {
            session.user.id = token.id as string;
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id;
            }
            return token;
        }
    }
};
