"use client"

import { useState } from "react"
import { FiEye, FiEyeOff  } from "react-icons/fi";

import styles from "./styles.module.css"


export default function Input({
    register,
    errors,
    name,
    customStyles,
    ...rest
}) {
    const [inputType, setInputType] = useState(rest.type)

    function renderPasswordOption() {
        const handlePasswordOption = () => {
            const getType = inputType === 'password' ? 'text' : 'password'
            setInputType(getType)
        }

        return (
            <button type="button" onClick={handlePasswordOption} className={styles.password_button}>
                {inputType === 'password' ? <FiEye size={18} color="#718096" /> : <FiEyeOff size={18} color="#718096" />}
            </button>
        )
    }

    return (
        <div className={styles.input_container}>
            <div className={`${styles.input_area} ${customStyles}`}>
                <input
                    className={styles.input}
                    {...register(name)}
                    {...rest}
                    type={inputType}
                />
                {rest.type === "password" && renderPasswordOption()}
            </div>
            {errors[name] && (
                <span className={styles.span}>{errors[name]?.message}</span>
            )}
        </div>
    )
}