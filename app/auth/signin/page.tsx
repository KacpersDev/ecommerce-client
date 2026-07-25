import Header from "@/app/components/header/Header";
import SignIn from "@/app/components/auth/SignIn";
import BreakLine from "@/app/components/misc/BreakLine";

export default function Home() {
    return (
        <>
            <Header/>
            <BreakLine/>
            <SignIn/>
        </>
    )
}