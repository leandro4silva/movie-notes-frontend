import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

import * as Dialog from '@radix-ui/react-dialog'

import { api } from "../../services/api";
import { useAuth } from "../../hooks/auth";

import { Header } from "../../components/Header";
import { Rating } from "../../components/Rating";
import { Tag } from "../../components/Tag";
import { Back } from "../../components/Back";
import { NoteModal } from "../../components/NoteModal";
import { ToastMessage } from "../../components/ToastMessage";

import timerImg from '../../assets/icon/timer.svg'
import { Container, Content } from "./styles";

export function Details() {
    const { user } = useAuth()
    const navigate = useNavigate()
    
    const [search, setSearch] = useState("")
    const [data, setData] = useState({})
    const [confirmDelete, setConfirmDelete] = useState(false)
    const [openToast, setOpenToast] = useState(false)
    const [openModal, setOpenModal] = useState(false)

    const [messageError, setMessageToast] = useState("")

    const params = useParams()

    function handleBack() {
        navigate(-1)
    }

    useEffect(() => {
        async function handleRemoveNote() {
            try {
                await api.delete(`/notes/${params.id}`)
                navigate(-1)   
                setConfirmDelete(false)             
            } catch{
                setMessageToast('Não foi possivel excluir a nota')
                setOpenModal(false)
                setOpenToast(true)
                setConfirmDelete(false)
            }
        }
        if(confirmDelete){
            handleRemoveNote()
        }
    }, [confirmDelete])


    
    useEffect(() => {
        async function fetchNote() {
            const response = await api.get(`/notes/${params.id}`)
            response.data.created_at = response.data.created_at.split('-').join('/').split(' ').join(' às ')
            setData(response.data)
        }
        fetchNote()
    }, [])

    return (
        <Container>
            <Header handleSearch={setSearch} />
            <Content>
                <header>
                    <Back title="Voltar" onClick={handleBack} />
                    <Dialog.Root open={openModal} onOpenChange={setOpenModal}>
                        <Dialog.Trigger type="button">Excluir nota </Dialog.Trigger>
                        <NoteModal deletedTag={setConfirmDelete}/>
                    </Dialog.Root>
                </header>
                <div className="title-rating">
                    <h2>{data.title}</h2>
                    <Rating rating={data.rating} isPreview />
                </div>
                <div className="user-created-at">
                    <img src="https://github.com/leandro4silva.png" alt="Foto do usuário" />
                    <h4>{`Por ${user.name}`}</h4>
                    <img src={timerImg} alt="Icone de um relogio" />
                    <h4>{data.created_at}</h4>
                </div>
                {
                    data.tags &&
                    <div className="tags">
                        {
                            data.tags.map(tag => {
                                return (
                                    <Tag key={tag.id} title={tag.name}></Tag>
                                )
                            })
                        }
                    </div>
                }
                <p>{data.description}</p>
            </Content>
            <ToastMessage message={messageError} onOpenChange={setOpenToast} open={openToast}/>
        </Container>
    )
}