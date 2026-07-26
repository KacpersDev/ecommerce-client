interface LabelProps {
    label: string;
    htmlFor?: string;
}

const AuthLabel = (props: LabelProps) => {
    const { htmlFor, label } = props;

    return <label htmlFor={htmlFor}>{label}</label>
}

export default AuthLabel;