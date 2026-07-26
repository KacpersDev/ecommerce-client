import { ChangeEventHandler } from "react";

interface InputProps {
    type: string;
    value?: string;
    className?: string;
    name?: string;
    id?: string;
    required?: boolean;
    onChange?: ChangeEventHandler<HTMLInputElement>;
}

const AuthInput = (props: InputProps) => {
    const { type, value, className, id, name, required, onChange } = props;
    
    return <input required={required} id={id} name={name} 
        className={"border border-slate-200 rounded-lg h-[35px] p-[5px] " + (className ?? "")} 
        type={type} 
        value={value}
        onChange={onChange}      
    />
}

export default AuthInput;