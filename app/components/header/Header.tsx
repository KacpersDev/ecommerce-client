import Image from "next/image";

import HeaderButton from "./HeaderButton";

import Logo from "@/app/assets/logo.png";
import { MdPerson } from "react-icons/md";

const Header = () => {
    return (
        <div className="flex justify-between px-6 md:px-12 lg:px-24">
            <div>
                <Image src={Logo} alt="logo" width={64}/>
            </div>
            <div className="flex space-x-[15px] items-center">
                <HeaderButton text="Shop"/>
                <HeaderButton text="Contact"/> 
                <MdPerson className="hover:cursor-pointer" size={24}/>
            </div>
        </div>
    )
}

export default Header;