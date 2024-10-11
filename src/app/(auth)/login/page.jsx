"use client"

import Image from "next/image"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import Link from "next/link"

import styles from "./styles.module.css"
import Input from "@/components/input/input"
import Button from "@/components/button/button"


const loginSchema = z.object({
    username: z.string().min(1, ('Insira um nome de usuário!')),
    password: z.string().min(1, 'Insira uma senha!'),
})

export default function Login() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(loginSchema) })

    const handleAuthenticatePress = (authenticateData) => {
        console.log(authenticateData);
    } 

    return (
        <main className={styles.main}>
            <section className={styles.auth_area}>
                <Image
                    src='/images/primeset-logo.svg'
                    width={389}
                    height={130}
                    className={styles.primeset_logo}
                    alt='primeset-logo'
                />
                <form onSubmit={handleSubmit(handleAuthenticatePress)} className={styles.form}>
                   <div className={styles.input_area}>
                        <Input
                            register={register}
                            name='username'
                            errors={errors}
                            placeholder='Usuário'
                            customStyles={styles.custom_input}
                        />
                        <Input
                            register={register}
                            name='password'
                            errors={errors}
                            placeholder='Senha'
                            customStyles={styles.custom_input}
                            type="password"
                        />
                   </div>
                    <div className={styles.button_area}>
                        <Button type="submit" customStyles={styles.authenticate_button}>
                            <div className={styles.authenticate_text_area}>
                                <Image
                                    src='/images/authenticate-logo.svg'
                                    alt='authenticate-logo'
                                    width={16}
                                    height={16}
                                />
                                <span>Autenticar</span>
                            </div>
                        </Button>
                        <Link href='/recover-link'>
                            <Button type='button'>
                                <span className={styles.forgot_password_text}>Esqueci minha senha</span>
                            </Button>
                        </Link>
                    </div>
                </form>
            </section>
            <section className={styles.bg_area}>
            </section>
        </main>
    )
}