import { useAuth } from '../../hooks/auth'
import { useState, useEffect } from "react";
import { useNavigate, Link } from "react-router-dom";
import { api } from "../../services/api";

import avatarPlaceholder from '../../assets/icon/avatar-placeholer.svg'
import openMenu from '../../assets/icon/open-menu.svg'
import closeMenu from '../../assets/icon/close-menu.svg'

import { Input } from "../Input";

import { Container, Logo, Profile } from "./styles";

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
        <Container className='nav'>
            <Logo className='logo' to="/">RocketMovies</Logo>
            <div className="menu">
                <div className='vertical-menu'>
                    <Input 
                        className="search"
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
                </div>
                <ul>
                    <li>
                        <Link to="/profile">Perfil</Link>
                    </li>
                    <li>
                        <Link onClick={handleSignOut}>Sair</Link>
                    </li>
                </ul>
            </div>
            <button 
                className='open-menu'
                onClick={() => document.querySelector('.nav').classList.add('menu-expanded')}
            >
                    <img src={openMenu} alt="Abrir menu"/>
            </button>
            <button 
                className='close-menu'
                onClick={() => document.querySelector('.nav').classList.remove('menu-expanded')}
            >
                <img src={closeMenu} alt="Fechar menu" />
            </button>

        </Container>
    )
}

