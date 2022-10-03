import { Container, Logo, Profile } from "./styles";
import { Input } from "../Input";

import { Link } from "react-router-dom";

import { useAuth } from '../../hooks/auth'

import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import avatarPlaceholder from '../../assets/icon/avatar-placeholer.svg'
import { api } from "../../services/api";

export function Header({handleSearch}) {
    const { signOut, user } = useAuth()
    const [search, setSearch] = useState("")
    const navigate = useNavigate()
    const avatarUrl = user.avatar ? `${api.defaults.baseURL}/files/${user.avatar}` : avatarPlaceholder
    
    function handleSignOut(){
        signOut()
        navigate('/')
    }
    
    useEffect(()=> {
        handleSearch(search)
    }, [search])

    return (
        <Container>
            <Logo to="/">MovieNotes</Logo>
            <Input 
                type="text" 
                placeholder="Pesquisar pelo titulo"
                onChange={e=> setSearch(e.target.value)}
            ></Input>
            <Profile>
                <div>
                    <Link to="/profile">{user.name}</Link>
                    <button onClick={handleSignOut}>sair</button>
                </div>
                <Link to="/profile">
                    <img src={avatarUrl} alt="Foto do usuário" />
                </Link>
            </Profile>
        </Container>
    )
}

