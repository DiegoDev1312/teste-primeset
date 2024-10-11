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
    newPassword: z
        .string()
        .min(6, ('Senha menor que 6 dígitos!')),
    confirmNewPassword: z
        .string()
        .min(6, ('Senha menor que 6 dígitos!')),
}).refine((data) => data.newPassword === data.confirmNewPassword, {
    message: "Informe a mesma senha em ambos os campos!",
    path: ["confirmNewPassword"],
})

export default function ResetPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm({ resolver: zodResolver(recoverSchema) })
    const router = useRouter()
    const newPasswordRules = [
        'Mínimo 6 caracteres',
        'Mínimo uma letra [a-z ou A-Z]',
        'Mínimo um número [0-9]',
        'Mínimo um caracter especial [!@#$%ˆ&()_-+={}[]|:;<>?/~]',
    ]

    const handleResetPress = () => {
        toast("Senha alterada com sucesso!", {
            type: 'success'
        })
        router.push('/login')
    } 

    function renderPasswordRules() {
        return newPasswordRules.map((rule) => {
            return <li className={styles.list_text} key={rule}>{rule}</li>
        })
    }

    return (
        <main className={styles.main}>
            <AuthHeader />
            <section className={styles.auth_area}>
                <form onSubmit={handleSubmit(handleResetPress)} className={styles.form}>
                    <div className={styles.info_area}>
                        <h1 className={styles.h1}>Redefinir senha</h1>
                    </div>
                    <div className={styles.input_area}>
                        <div className={styles.new_password_area}>
                            <Input
                                register={register}
                                name='newPassword'
                                errors={errors}
                                placeholder="Nova senha"
                                customStyles={styles.custom_input}
                                type="password"
                            />
                            <ul className={styles.list_area}>{renderPasswordRules()}</ul>
                        </div>
                        <Input
                            register={register}
                            name='confirmNewPassword'
                            errors={errors}
                            placeholder="Confirme nova senha"
                            customStyles={styles.custom_input}
                            type="password"
                        />
                   </div>
                    <div className={styles.button_area}>
                        <Button type="submit" customStyles={styles.send_button}>
                            <span>Atualizar senha</span>
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