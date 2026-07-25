interface Button {
    text: string;
}

const HeaderButton = (props: Button) => {
    const { text } = props;

    return <button className="text-[18px] hover:cursor-pointer hover:opacity-75 hover:underline">{text}</button>
}

export default HeaderButton;