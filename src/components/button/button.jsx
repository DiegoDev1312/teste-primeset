import styles from "./styles.module.css"

export default function Button({ children, customStyles, ...rest }) {

    return (
        <button className={`${styles.button} ${customStyles}`} {...rest}>
            {children}
        </button>
    )
}