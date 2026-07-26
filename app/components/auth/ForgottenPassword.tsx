"use client";
import { FormEvent, useState } from "react";

import AuthInput from "./AuthInput";
import AuthLabel from "./AuthLabel";
import AuthLink from "./AuthLink";

const ForgottenPassword = () => {

    const [email, setEmail] = useState("");

    const handleSubmit = (event: FormEvent) => {}

    return (
        <div className="grid mx-auto w-full max-w-[500px] py-20 px-2">
            <p className="text-[35px] font-bold text-center max-sm:text-[25px]">Reset your password</p>
            <p className="text-[21px] text-center max-sm:text-[14px]">We will email you instructions to reset your password</p>
            <form className="grid space-y-[10px] mt-[30px]" onSubmit={handleSubmit}>
                <div className="grid">
                    <AuthLabel label="Email address" htmlFor="email"/>
                    <AuthInput type="email" id="email" name="email" required onChange={(event) => setEmail(event.target.value)}/>
                </div>
                <div>
                    <AuthInput type="submit" value="Reset Password" className="bg-blue-500 text-white h-[40px] mx-auto w-full max-w-[500px] hover:cursor-pointer hover:opacity-75"/>
                </div>
            </form>
            <div className="grid">
                <AuthLink href="/auth/signin" text="Back to login"/>
            </div>
        </div>
    )
}

export default ForgottenPassword;