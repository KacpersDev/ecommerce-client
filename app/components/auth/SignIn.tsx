import AuthInput from "./AuthInput";
import AuthLabel from "./AuthLabel";

const SignIn = () => {
    return (
        <div className="grid mx-auto w-full max-w-[500px] py-20">
            <p className="text-[35px] font-bold text-center">Log into your account</p>
            <p className="text-[21px] text-center">Please enter your email and password</p>
            <form className="mt-[30px]">
                <div className="grid">
                    <AuthLabel label="Email address"/>
                    <AuthInput type="text"/>
                </div>
                <div className="grid mt-[15px]">
                    <AuthLabel label="Password"/>
                    <AuthInput type="password"/>
                </div>
                <div className="mt-[15px]">
                    <AuthInput type="submit" value="Login" className="bg-blue-500 text-white h-[40px] mx-auto w-full max-w-[500px] hover:cursor-pointer"/>
                </div>
            </form>
        </div>
    )
} 

export default SignIn;