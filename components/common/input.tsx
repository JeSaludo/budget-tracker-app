import React from "react";
import { InputProps } from "@/types/input";
import styles from "@/styles/components/input.module.scss";
const Input:React.FC<InputProps> = ({
    value,
    onChange,
    placeholder,
    type = "text",
    name,       
    id,
    className}) => {
    return (
    <div className={`${styles["input-wrapper"]}`}>
        <input
            type={type}
            value={value}
            onChange={onChange}
            placeholder={placeholder}
            name={name}
            id={id}
            className={`${className}`}
        />
    </div>
    );
}

export default Input;