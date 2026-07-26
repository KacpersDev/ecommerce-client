"use client";
import { FormEvent, useState } from "react";

import AuthInput from "./AuthInput";
import AuthLabel from "./AuthLabel";
import AuthLink from "./AuthLink";

const SignUp = () => {

    const [fullName, setFullName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        // TODO handle sign up
        alert("signing in coming soon...");
    }
    
    return (
        <div className="grid mx-auto w-full max-w-[500px] py-20 px-2">
            <p className="text-[35px] font-bold text-center max-sm:text-[25px]">Log into your account</p>
            <p className="text-[21px] text-center max-sm:text-[14px]">Please enter your email and password</p>
            <form className="grid space-y-[10px] mt-[30px]" onSubmit={handleSubmit}>
                <div className="grid">
                    <AuthLabel label="Full name" htmlFor="full_name"/>
                    <AuthInput type="text" id="full_name" name="full_name" required onChange={(event) => setFullName(event.target.value)}/>
                </div>
                <div className="grid">
                    <AuthLabel label="Email address" htmlFor="email"/>
                    <AuthInput type="email" id="email" name="email" required onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div className="grid">
                    <AuthLabel label="Password" htmlFor="password"/>
                    <AuthInput type="password" id="password" name="password" required onChange={(event) => setPassword(event.target.value)}/>
                </div>
                <div>
                    <AuthInput type="submit" value="Login" className="bg-blue-500 text-white h-[40px] mx-auto w-full max-w-[500px] hover:cursor-pointer hover:opacity-75"/>
                </div>
            </form>
            <div className="grid">
                <AuthLink href="/auth/signin" text="Already have an account? Sign in"/>
            </div>
        </div>
    )
} 

export default SignUp;