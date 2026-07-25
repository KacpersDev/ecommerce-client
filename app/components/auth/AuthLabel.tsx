interface Label {
    label: string;
    htmlFor?: string;
}

const AuthLabel = (props: Label) => {
    const { htmlFor, label } = props;

    return <label htmlFor={htmlFor}>{label}</label>
}

export default AuthLabel;