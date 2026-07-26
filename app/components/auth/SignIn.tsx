"use client";
import { FormEvent } from "react";
import AuthInput from "./AuthInput";
import AuthLabel from "./AuthLabel";
import AuthLink from "./AuthLink";

const SignIn = () => {

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();

        // TODO handle sign in
        alert("signing in coming soon...");
    }
    
    return (
        <div className="grid mx-auto w-full max-w-[500px] py-20 px-2">
            <p className="text-[35px] font-bold text-center max-sm:text-[25px]">Log into your account</p>
            <p className="text-[21px] text-center max-sm:text-[14px]">Please enter your email and password</p>
            <form className="mt-[30px]" onSubmit={handleSubmit}>
                <div className="grid">
                    <AuthLabel label="Email address" htmlFor="email"/>
                    <AuthInput type="email" id="email" name="email" required/>
                </div>
                <div className="grid mt-[15px]">
                    <AuthLabel label="Password" htmlFor="password"/>
                    <AuthInput type="password" id="password" name="password" required/>
                </div>
                <div className="mt-[15px]">
                    <AuthInput type="submit" value="Login" className="bg-blue-500 text-white h-[40px] mx-auto w-full max-w-[500px] hover:cursor-pointer hover:opacity-75"/>
                </div>
            </form>
            <div className="grid">
                <AuthLink href="/auth/forgotten-password" text="Forgot your password?"/>
                <AuthLink href="/auth/signup" text="Create account"/>
            </div>
        </div>
    )
} 

export default SignIn;