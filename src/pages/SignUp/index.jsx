import { Link } from "react-router-dom"

import { FiUser, FiLock, FiMail, FiArrowLeft } from 'react-icons/fi'

import { HeaderLogin } from "../../components/HeaderLogin"
import { Input } from "../../components/Input"
import { Button } from "../../components/Button"

import { Container, Form, Content } from "./styles"

import { useForm } from 'react-hook-form'
import { api } from "../../services/api"
import { Fragment, useState } from "react"


export function SignUp() {
    const [messageSucess, setMessageSucess] = useState("")
    const [messageError, setMessageError] = useState("")

    const { register, handleSubmit, formState: { errors } } = useForm({
        name: "",
        email: "",
        password: ""
    })

    const onSubmit = async (data) => {
        const { name, email, password } = data

        try {
            await api.post('/users', { name, email, password })
                .then(() => {
                    setMessageSucess('Usuario cadastrado com sucesso!')
                })
        } catch (error) {
            if (error.response) {
                setMessageError(error.response.data.message)
            } else {
                setMessageError('Não foi possivel realizar o cadastro, tente novamente mais tarde.')
            }
        }
    }

    return (
        <Container>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <HeaderLogin />
                {       
                    messageSucess ?
                       
                        <div className="alert-success">
                            <h4>{messageSucess}</h4>
                        </div>

                        :
                        <Fragment>
                            <h2>Crie sua conta</h2>
                            { 
                                messageError ? 
                                <div className="alert-error">
                                    <p className="error">{`* ${messageError}`}</p>
                                </div>
                                :
                                null
                            }

                            <Input
                                placeholder="Nome"
                                icon={FiUser}
                                hasError={errors.name?.message}
                                register={register('name', { required: "Informe o seu nome, por favor!" })}
                            />
                            {errors.name?.message ? 
                                <p className="error">{errors.name?.message}</p>: 
                                null
                            }
                            <Input
                                placeholder="E-mail"
                                icon={FiMail}
                                hasError={errors.email?.message}
                                register={register('email', { required: "Informe o seu email, por favor!" })}
                            />
                            { errors.email?.message ? 
                                <p className="error">{errors.email?.message}</p>
                                : 
                                null
                            }
                            <Input
                                placeholder="Senha"
                                type="password"
                                icon={FiLock}
                                hasError={errors.password?.message}
                                register={register('password', { required: "Informe a sua senha, por favor!" })}
                            />
                            {errors.password?.message ? 
                                <p className="error">{errors.password?.message}</p> 
                                : 
                                null
                            }
                            <Button
                                title="Cadastrar"
                                type="submit" a
                            />
                        </Fragment>
                }
                <Link to="/"> <FiArrowLeft size={16} /> Voltar para o login</Link>
            </Form>
            <Content>
            </Content>
        </Container>
    )
}