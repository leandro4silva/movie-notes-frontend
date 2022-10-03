import { useState } from "react";
import { Header } from "../../components/Header";
import { Back } from "../../components/Back";
import { Input } from "../../components/Input";
import { TextArea } from "../../components/TextArea";
import { TagItem } from "../../components/TagItem";
import { Button } from "../../components/Button";
import { ToastMessage } from "../../components/ToastMessage";

import { useNavigate } from "react-router-dom";
import { api } from "../../services/api";

import { useForm } from 'react-hook-form'
import { Container, Content, Form } from "./styles";
import { useEffect } from "react";

export function New(){
    const [search, setSearch] = useState("")
    
    const [newTag, setNewTag] = useState("")
    const [tags, setTags] =  useState([])

    const [openToast, setOpenToast] = useState(false)
    const [messageToast, setMessageToast] = useState("")

    const {register, handleSubmit, formState: {errors}} = useForm()

    const navigate = useNavigate()

    function handleAddTags(){
        if(newTag == ""){
            setOpenToast(true)
            setMessageToast({
                description : "Informe o nome da tag, por favor!",
                isSuccess: false
            })
            return 
        }

        setTags(prevState =>  [...prevState, newTag])
        setNewTag("")
    }

    function handleRemoveTag(deletedTag){
        setTags(prevState => prevState.filter(tag => tag != deletedTag ? true : false))
    }

    function handleBack(){
        navigate(-1)
    }

    const onSubmit = async (data) => {
        const {title, rating, description} = data

        if(newTag != ""){
            setOpenToast(true)
            setMessageToast({
                description : "Voce preencheu um marcador mais ainda não adicionou!",
                isSuccess: false
            })
            return
        }
        try{
            await api.post("/notes", {title, rating, description, tags})
            navigate(-1)
        }catch{
            setOpenToast(true)
            setMessageToast('Não foi possivel realizar o cadastro')
        }       
    }

    return (
        <Container>
            <Header handleSearch={setSearch}/>
            <Content>
                <header>
                    <Back title="Voltar" onClick={handleBack}/>
                </header>
                <h2>Novo filme</h2>
                <Form onSubmit={handleSubmit(onSubmit)}>
                    <div className="input-wrapper">
                        <div>
                            <Input 
                                placeholder="Título"
                                hasError={errors.title?.message}
                                register={register('title', {required: "Informe um titulo para a nota, por favor!"})}
                            />
                            { errors.title?.message ? <p className="error">{errors.title?.message}</p> : null}
                        </div>
                        <div>
                            <Input 
                                placeholder="Sua nota (de 0 a 5)" 
                                type="number" 
                                min="0"
                                max="5"
                                hasError={errors.rating?.message}
                                register={register('rating', {required: "Faça uma avaliação, por favor!"})}
                            />
                            {errors.rating?.message ? <p className="error">{errors.rating?.message}</p>: null}
                        </div>
                    </div>
                    <div className="textarea-wrapper">
                        <TextArea 
                            placeholder="Observações"
                            hasError={errors.description?.message}
                            register={register('description', {required: "Informe uma descrição, por favor!"})}
                        />
                        {errors.description?.message ? <p className="error">{errors.description?.message}</p> : null}
                    </div>
                    <div className="input-tags">
                        <h3>Marcadores</h3>                       
                        <div className="handle-tags">
                            {
                                tags.map((tag, index)=> {
                                    return(
                                        <TagItem 
                                            key={index} 
                                            value={tag} 
                                            title={tag}
                                            onClick={() => handleRemoveTag(tag)}
                                        />
                                    )
                                })
                            }
                            <TagItem  
                                isNew
                                onChange={e => setNewTag(e.target.value)}
                                value={newTag}
                                onClick={handleAddTags}
                            />
                        </div>
                    </div>

                    <div className="input-button">
                        <Button type="button" isDelete title="Cancelar" onClick={handleBack}/>
                        <Button type="submit" title="Salvar"/>
                    </div>
                </Form>
            </Content>
            <ToastMessage message={messageToast} onOpenChange={setOpenToast} open={openToast}/>
        </Container>
    )
}