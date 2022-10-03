import { Container, Header, Avatar, Form } from "./styles";

import { FiCamera, FiLock, FiMail, FiUser } from "react-icons/fi";
import avatarPlaceholder from '../../assets/icon/avatar-placeholer.svg'

import { Back } from "../../components/Back";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { ToastMessage } from "../../components/ToastMessage";

import { useState } from "react";
import { useNavigate} from 'react-router-dom'
import { useAuth } from "../../hooks/auth";
import { useForm } from "react-hook-form";

import { api } from "../../services/api";

export function Profile() {
    const {user, updateProfile} = useAuth()

    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    
    const [avatar, setAvatar] = useState(avatarUrl)
    const [avatarFile, setAvatarFile] = useState()

    const [messageToast, setMessageToast] = useState({})
    const [openToast, setOpenToast] = useState(false)

    const {register, handleSubmit, formState:{errors}} = useForm({
        defaultValues:{
            name: user.name,
            email: user.email
        }
    })

    const navigate = useNavigate()

    function handleBack() {
        navigate(-1)
    }

    function handleChangeAvatar(event){
        const file = event.target.files[0]
        setAvatarFile(file)

        const imagePreview = URL.createObjectURL(file)
        setAvatar(imagePreview)
    }

    const onSubmit = async (data) => {
        const {name, email, oldPassword, newPassowrd} = data

        const updated ={
            name, 
            email, 
            password: newPassowrd,
            old_password: oldPassword
        }

        const userUpdated = Object.assign(user, updated)
        const error = await updateProfile({user: userUpdated, avatarFile})
        
        if(error){
            setMessageToast({ 
                description : error,
                isSuccess: false
            })
            setOpenToast(true)
        }else{
            setMessageToast({
                description: "Perfil atualizado com sucesso!",
                isSuccess: true
            })
            setOpenToast(true)
        }
        
    }

    return (
        <Container>
            <Header>
                <Back title="Voltar" onClick={handleBack} />
            </Header>
            <Form onSubmit={handleSubmit(onSubmit)}>
                <Avatar>
                    <img src={avatar} alt="Foto do usuario" />
                    <label htmlFor="avatar">
                        <FiCamera />
                        <input 
                            id="avatar" 
                            name="avatar" 
                            type="file"
                            onChange={handleChangeAvatar} 
                        />
                    </label>
                </Avatar>
                <div className="name-email">
                    <Input 
                        icon={FiUser} 
                        hasError={errors.name?.message}
                        register={register('name', {required: "Informe o nome do usuario, por favor!"})}
                    />
                    { errors.name?.message ? <p className="error">{errors.name?.message}</p> : null }
                    <Input 
                        type="email" 
                        icon={FiMail} 
                        hasError={errors.email?.message}
                        register={register('email', {required: "Informe o seu email, por favor!"})}
                    />
                    { errors.email?.message ? <p className="error">{errors.email?.message}</p> : null }
                </div>
                <div className="password">
                    <Input 
                        type="password"
                        icon={FiLock} 
                        placeholder="Senha atual" 
                        register={register('oldPassword')}
                    />
                    <Input 
                        type="password"
                        icon={FiLock} 
                        placeholder="Nova senha" 
                        register={register('newPassowrd')}
                    />
                </div>
                <Button title="Salvar" type="submit" onClick={handleSubmit} />
            </Form>
            <ToastMessage message={messageToast} onOpenChange={setOpenToast} open={openToast}/>
        </Container>
    )
}