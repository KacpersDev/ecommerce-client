interface Input {
    type: string;
}

const AuthInput = (props: Input) => {
    const { type } = props;
    
    return <input type={type} />
}

export default AuthInput;