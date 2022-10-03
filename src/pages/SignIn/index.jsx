import { Fragment, useState } from "react";
import { useAuth } from "../../hooks/auth";

import { Link } from "react-router-dom";
import { FiUser, FiLock } from 'react-icons/fi';

import { HeaderLogin } from "../../components/HeaderLogin";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

import { Container, Form, Content } from "./styles";
import { useForm } from 'react-hook-form'


export function SignIn() {
    const [messageError, setMessageError] = useState("")

    const { register, handleSubmit, formState: { errors } } = useForm({
        email: "",
        password: ""
    })

    const { singIn } = useAuth();

    const onSubmit = async (data) => {
        const { email, password } = data
        const error = await singIn({ email, password })

        if (error) {
            setMessageError(error)
        }
    }

    function handleClearMessageError(){
        setMessageError("")
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <HeaderLogin />
                <h2>Faça seu login</h2>
                {
                    messageError ?
                        <p className="error">{`* ${messageError}`}</p>
                    :
                        null
                }
                <Input
                    placeholder="E-mail"
                    icon={FiUser}
                    hasError={errors.email?.message}
                    register={register('email', { required: "Informe o seu email, por favor!" })}
                    onInput={handleClearMessageError}
                />
                {errors.email?.message ? <p className="error">{errors.email?.message}</p> : null}
                <Input
                    type="password"
                    placeholder="Senha"
                    icon={FiLock}
                    hasError={errors.password?.message}
                    register={register('password', { required: "Informe a senha, por favor!" })}
                    onInput={handleClearMessageError}
                />
                {errors.password?.message ? <p className="error">{errors.password?.message}</p> : null}
                <Button title="Entrar" type="submit" />
                <Link to="/register">Criar conta</Link>
            </Form>
            <Content>
            </Content>
        </Container>
    )
}