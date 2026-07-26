interface Input {
    type: string;
    value?: string;
    className?: string;
}

const AuthInput = (props: Input) => {
    const { type, value, className } = props;
    
    return <input className={"border border-slate-200 rounded-lg h-[35px] p-[5px] " + (className ?? "")} type={type} value={value}/>
}

export default AuthInput;