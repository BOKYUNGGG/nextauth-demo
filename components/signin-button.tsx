'use client'
import {signIn} from 'next-auth/react'

export default function SigninButton(){
    return(
        <button onClick={(e)=> {
            e.preventDefault()
            signIn('credentials', {
                callbackUrl : 'http://localhost:3000/api/auth/signin'
            })}
        }>
            Sign In
        </button>
    )
}
