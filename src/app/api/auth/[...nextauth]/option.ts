import { NextAuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import prisma from "@/lib/prisma";

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
            async authorize(credentials: Record<string, string> | undefined): Promise<any> {
                if (!credentials) return null;

                const user = await prisma.userlogin.findUnique({
                    where: { email: credentials.email }
                });

                if (user && user.password === credentials.password) {
                    return {
                        id: user.id.toString(),
                        email: user.email
                    };
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
            if (session.user) {
                session.user.id = token.id as string;
            }
            return session;
        },
        async jwt({ token, user }) {
            if (user) {
                token.id = user.id as string;
                token.exp = Math.floor(Date.now() / 1000) + 60 * 60 * 24; // the token expire after 1 day
            }
            return token;
        }
    }
};
