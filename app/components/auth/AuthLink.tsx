import Link from "next/link";

interface LinkProps {
    text: string;
    href: string;
}

const AuthLink = (props: LinkProps) => {
    const { text, href } = props;

    return <Link className="text-slate-600" href={href}>{text}</Link>
}

export default AuthLink;