'use client'

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import z from "zod"
import Link from 'next/link'
import { toast } from 'react-toastify';
import { useRouter } from 'next/navigation'

import styles from './styles.module.css'
import Input from '@/components/input/input'
import Button from '@/components/button/button'
import AuthHeader from '@/components/auth-header/auth-header'

const recoverSchema = z.object({
    email: z
        .string()
        .min(1, ('Insira um e-mail!')).email('Insira um e-mail válido!'),
})

export default function RecoverLink() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(recoverSchema) })
    const router = useRouter()

    const handleRecoverPress = () => {
        toast("Link enviado para o e-mail!", {
            type: 'success'
        })
        router.push('/reset-password')
    } 

    return (
        <main className={styles.main}>
            <AuthHeader />
            <section className={styles.auth_area}>
                <form onSubmit={handleSubmit(handleRecoverPress)} className={styles.form}>
                    <div className={styles.info_area}>
                        <h1 className={styles.h1}>Informe seu e-mail</h1>
                        <p className={styles.p}>Enviaremos um link de redefinição de senha para o seu e-mail cadastrado.</p>
                    </div>
                   <Input
                        register={register}
                        name='email'
                        errors={errors}
                        placeholder="E-mail"
                        customStyles={styles.custom_input}
                    />
                    <div className={styles.button_area}>
                        <Button type="submit" customStyles={styles.send_button}>
                            <span>Enviar</span>
                        </Button>
                        <Link href="/login">
                            <Button type="button">
                                <span className={styles.cancel_text}>Cancelar</span>
                            </Button>
                        </Link>
                    </div>
                </form>
            </section>
        </main>
    )
}