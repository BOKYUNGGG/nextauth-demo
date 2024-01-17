import NextAuth from "next-auth/next";
import CredentialsProvider from "next-auth/providers/credentials";
import { NextAuthOptions } from "next-auth";


export const authOption : NextAuthOptions= {
    providers : [
        CredentialsProvider({
            name : 'Credentials',
            credentials : {
                username: { label: "Username", type: "text", placeholder: "jsmith" },
                password: { label: "Password", type: "password" }
            },
            async authorize(credentials){
                const res = await fetch('http://localhost:3000/api/login', {
                    method : "POST",
                    headers : {
                        "Content-Type": "application/json"
                    },
                    body : JSON.stringify(credentials),
                })
                const user = await res.json()

                if(res.ok && user){
                    console.log('user on provider :', user)
                    return user
                }
                return null
            },
            
        }),
        CredentialsProvider({
            id: "intranet-credentials",
            name: "Two Factor Auth",
            async authorize(credentials, req) {
                const res = await fetch('http://localhost:3000/api/login', {
                    method : 'POST',
                    headers : {
                        "Content-Type" : 'application/json'
                    },
                    body : JSON.stringify(credentials)
                })
                const user = await res.json()
                
                if(res.ok && user){
                    console.log('user on provider :', user)
                    return user
                }
                return null
            },
            credentials: {
                username: { 
                    label: "Username", 
                    type: "text ", 
                    placeholder: "jsmith" 
                },
                "2fa-key": { label: "2FA Key" },
            },
        })
    ],
    callbacks : {
        
    },
    secret : 'example-secret'
}

const handler = NextAuth(authOption)
export {handler as GET, handler as POST}