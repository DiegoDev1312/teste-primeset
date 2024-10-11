import Image from "next/image"
import styles from "./styles.module.css"

export default function AuthHeader() {
    return (
        <header className={styles.header}>
            <Image
                src="/images/primeset-header-logo.svg"
                width={137.6}
                height={43.5}
                alt="primeset-logo"
            />
        </header>
    )
}